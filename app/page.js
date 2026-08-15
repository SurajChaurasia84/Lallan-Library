'use client';

import React, { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import HeroSection from '@/components/HeroSection';
import WeatherCanvas from '@/components/WeatherCanvas';
import AmbientParticlesCanvas from '@/components/AmbientParticlesCanvas';
import PlayerDeck from '@/components/PlayerDeck';
import PlaylistDrawer from '@/components/PlaylistDrawer';
import PwaBanner from '@/components/PwaBanner';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';

export default function LallanLibraryApp() {
    const [stationsData, setStationsData] = useState({ stations: {}, categories: [], totalTracks: 0 });
    const [isRainMode, setIsRainMode] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Fetch dynamic track database from Next.js server API
    useEffect(() => {
        fetch('/api/tracks')
            .then(res => res.json())
            .then(data => {
                if (data && data.stations) {
                    setStationsData(data);
                }
            })
            .catch(err => {
                console.error('Failed to load tracks from API:', err);
            });
    }, []);

    const player = useAudioPlayer(stationsData.stations, 'all');

    // Keyboard Shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (['input', 'textarea'].includes(document.activeElement?.tagName?.toLowerCase())) {
                return;
            }

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    player.togglePlayPause();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    player.seekTo(player.currentTime + 5);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    player.seekTo(Math.max(0, player.currentTime - 5));
                    break;
                case 'KeyN':
                    player.nextTrack();
                    break;
                case 'KeyP':
                    player.prevTrack();
                    break;
                case 'KeyW':
                    setIsRainMode(prev => !prev);
                    break;
                case 'KeyS':
                    player.toggleShuffle();
                    break;
                case 'KeyL':
                    player.cycleRepeat();
                    break;
                case 'KeyQ':
                    setIsDrawerOpen(prev => !prev);
                    break;
                case 'KeyM':
                    player.toggleMute();
                    break;
                case 'Escape':
                    setIsDrawerOpen(false);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [player]);

    return (
        <>
            {/* Hidden YouTube Iframe Player */}
            <div 
                style={{ position: 'fixed', bottom: -500, right: -500, opacity: 0.01, pointerEvents: 'none' }}
                aria-hidden="true"
            >
                <div id="yt-hidden-player-frame" />
            </div>

            {/* Atmosphere & Scene Wallpaper Background */}
            <div className="scene-container">
                <picture className="hero-picture">
                    <source media="(max-width: 768px)" srcSet="/assets/hero_m.png" />
                    <img 
                        id="hero-img" 
                        src="/assets/hero_d.png" 
                        alt="लल्लन लाइब्रेरी Sunset Scene" 
                        className={`hero-bg ${player.isPlaying ? 'playing' : ''} ${isRainMode ? 'rain-mode' : ''}`}
                    />
                </picture>
                <AmbientParticlesCanvas isRainMode={isRainMode} />
                <WeatherCanvas isRainMode={isRainMode} />
                <div className="scene-vignette" />
                <div id="weather-tint" className={`weather-tint ${isRainMode ? 'rain' : ''}`} />
            </div>

            {/* App Main Container */}
            <div className="app-layout">
                {/* Top Navigation Bar */}
                <TopBar 
                    isRainMode={isRainMode} 
                    onToggleWeather={() => setIsRainMode(prev => !prev)} 
                />

                {/* Center Stage: Hero Section */}
                <HeroSection totalTracks={stationsData.totalTracks || 285} />

                {/* Bottom Music Player Component */}
                <footer className="bottom-player-section">
                    <PwaBanner />
                    <PlayerDeck 
                        player={player} 
                        onToggleDrawer={() => setIsDrawerOpen(prev => !prev)} 
                    />
                </footer>
            </div>

            {/* Playlist Queue Drawer */}
            <PlaylistDrawer 
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                stations={stationsData.stations}
                categories={stationsData.categories}
                currentStationKey={player.currentStationKey}
                currentTrack={player.currentTrack}
                onSelectTrack={(track, stationKey) => {
                    player.playTrack(track, true, stationKey);
                }}
                onSelectStation={(stationKey) => {
                    player.playTrackByIndex(0, false, stationKey);
                }}
            />
        </>
    );
}
