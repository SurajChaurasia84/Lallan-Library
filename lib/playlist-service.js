import defaultPlaylistsConfig from '@/config/playlists.config.json';
import defaultTracksCache from '@/config/tracks.cache.json';

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
                const duration = video.lengthText?.simpleText || '4:00';
                tracks.push({
                    id: video.videoId,
                    title: cleanTitle(title),
                    artist: cleanArtist(artist),
                    duration: formatDuration(duration)
                });
            }
        }
        return tracks;
    } catch (e) {
        console.error('Error fetching YouTube playlist:', e);
        return [];
    }
}

export async function getPlaylistsAndTracks() {
    let config = defaultPlaylistsConfig || [];
    let cache = { ...defaultTracksCache };

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

        // Add to deduplicated unified 'all' station
        for (const t of formattedTracks) {
            if (!allTracksMap.has(t.id)) {
                allTracksMap.set(t.id, t);
            }
        }
    }

    const allTracks = Array.from(allTracksMap.values());
    stations['all'] = {
        id: 'all',
        name: 'All',
        tracks: allTracks
    };

    const categories = [
        { id: 'all', name: 'All', count: allTracks.length },
        ...config.map(c => ({
            id: c.id,
            name: c.name,
            count: stations[c.id]?.tracks?.length || 0
        }))
    ];

    return {
        stations,
        categories,
        totalTracks: allTracks.length
    };
}
