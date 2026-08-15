import fs from 'fs';
import path from 'path';

const CONFIG_PATH = path.join(process.cwd(), 'config', 'playlists.config.json');
const CACHE_PATH = path.join(process.cwd(), 'config', 'tracks.cache.json');

const cleanTitle = (t) => {
    return (t || '')
        .replace(/\(Official Video\)|\(Lyrics\)|\(Audio\)|\(Official Audio\)|\(From .*?\)|Jhankar/gi, '')
        .replace(/\|.*$/g, '')
        .trim() || 'Unknown Track';
};

const cleanArtist = (a) => {
    return (a || '')
        .replace(/ - Topic| - Channel|Release/gi, '')
        .trim() || 'Various Artists';
};

const formatDuration = (d) => {
    if (!d || typeof d !== 'string') return '4:00';
    const parts = d.split(':').map(Number);
    if (parts.length === 2) {
        let [m, s] = parts;
        if (m >= 60) {
            const h = Math.floor(m / 60);
            m = m % 60;
            return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
        }
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return d;
};

// Scrape public YouTube playlist HTML on server if new playlist is added
async function fetchYouTubePlaylistServer(playlistUrl) {
    try {
        const listMatch = playlistUrl.match(/list=([a-zA-Z0-9_-]+)/);
        if (!listMatch) return [];
        const listId = listMatch[1];
        const res = await fetch(`https://www.youtube.com/playlist?list=${listId}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9'
            },
            next: { revalidate: 3600 }
        });
        const html = await res.text();
        const jsonMatch = html.match(/var ytInitialData = ({.*?});<\/script>/);
        if (!jsonMatch) return [];
        const data = JSON.parse(jsonMatch[1]);
        const tabs = data?.contents?.twoColumnBrowseResultsRenderer?.tabs || [];
        const tab = tabs[0]?.tabRenderer?.content?.sectionListRenderer?.contents || [];
        const items = tab[0]?.itemSectionRenderer?.contents[0]?.playlistVideoListRenderer?.contents || [];

        const tracks = [];
        for (const item of items) {
            const video = item?.playlistVideoRenderer;
            if (video && video.videoId) {
                const title = video.title?.runs?.[0]?.text || video.title?.simpleText || 'Unknown';
                const artist = video.shortBylineText?.runs?.[0]?.text || 'Various Artists';
                const lengthText = video.lengthText?.simpleText || '3:45';
                tracks.push({
                    id: video.videoId,
                    title: cleanTitle(title),
                    artist: cleanArtist(artist),
                    duration: formatDuration(lengthText),
                    art: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                });
            }
        }
        return tracks;
    } catch (e) {
        console.error('Failed to fetch playlist server-side:', e.message);
        return [];
    }
}

export async function getPlaylistsAndTracks() {
    let config = [];
    try {
        config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    } catch (e) {
        config = [
            { id: 'lofi', name: 'Lofi' },
            { id: '90s', name: '90s Hits' },
            { id: 'love', name: 'Love' },
            { id: 'trending', name: 'Trending' }
        ];
    }

    let cache = {};
    try {
        cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
    } catch (e) {
        cache = {};
    }

    let cacheUpdated = false;
    const stations = {};
    const allTracksMap = new Map();

    for (const item of config) {
        const id = item.id;
        let tracks = cache[id] || [];

        // If no tracks cached yet and a URL is provided, fetch dynamically
        if ((!tracks || tracks.length === 0) && item.url) {
            tracks = await fetchYouTubePlaylistServer(item.url);
            if (tracks.length > 0) {
                cache[id] = tracks;
                cacheUpdated = true;
            }
        }

        // Clean & Format tracks
        const formattedTracks = (tracks || []).map(t => ({
            id: t.id,
            title: cleanTitle(t.title),
            artist: cleanArtist(t.artist),
            duration: formatDuration(t.duration),
            art: `https://img.youtube.com/vi/${t.id}/hqdefault.jpg`
        }));

        stations[id] = {
            id,
            name: item.name,
            tracks: formattedTracks
        };

        // Add to unified All list (deduplicated by ID)
        for (const t of formattedTracks) {
            if (t.id && !allTracksMap.has(t.id)) {
                allTracksMap.set(t.id, t);
            }
        }
    }

    // Shuffle unified all tracks array using Fisher-Yates
    const allTracks = Array.from(allTracksMap.values());
    for (let i = allTracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allTracks[i], allTracks[j]] = [allTracks[j], allTracks[i]];
    }

    stations['all'] = {
        id: 'all',
        name: 'All',
        tracks: allTracks
    };

    if (cacheUpdated) {
        try {
            fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2), 'utf8');
        } catch (e) {}
    }

    return {
        stations,
        categories: [
            { id: 'all', name: 'All', count: allTracks.length },
            ...config.map(c => ({
                id: c.id,
                name: c.name,
                count: stations[c.id]?.tracks?.length || 0
            }))
        ],
        totalTracks: allTracks.length
    };
}
