'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ListMusic } from 'lucide-react';

export default function PlaylistDrawer({ 
    isOpen, 
    onClose, 
    stations, 
    categories, 
    currentStationKey, 
    currentTrack, 
    onSelectTrack, 
    onSelectStation 
}) {
    const [searchQuery, setSearchQuery] = useState('');
    const listRef = useRef(null);
    const activeItemRef = useRef(null);

    const activeStation = stations[currentStationKey] || stations['all'] || { tracks: [] };
    const tracks = activeStation.tracks || [];

    const filteredTracks = tracks.filter(t => 
        (t.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.artist || '').toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Scroll active item into view when drawer opens or track changes
    useEffect(() => {
        if (isOpen && activeItemRef.current) {
            activeItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [isOpen, currentTrack]);

    return (
        <aside id="playlist-drawer" className={`playlist-drawer ${isOpen ? '' : 'hidden'}`}>
            {/* Header */}
            <div className="drawer-header">
                <div className="drawer-title-group">
                    <ListMusic className="drawer-header-icon" size={22} color="#f59e0b" />
                    <div>
                        <h3 className="drawer-title">लल्लन की लाइब्रेरी</h3>
                        <p className="drawer-subtitle" id="drawer-subtitle">
                            {activeStation.name || 'All'} • {filteredTracks.length} Songs
                        </p>
                    </div>
                </div>
                <button id="close-drawer-btn" onClick={onClose} className="icon-btn" title="Close (Q or Esc)">
                    <X size={18} />
                </button>
            </div>

            {/* Dynamic Station Tabs (Automatically rendered from config) */}
            <div className="station-tabs" id="station-tabs-container">
                {categories.map((cat) => {
                    const count = stations[cat.id]?.tracks?.length || cat.count || 0;
                    const isActive = currentStationKey === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => {
                                onSelectStation(cat.id);
                                setSearchQuery('');
                            }}
                            className={`station-tab ${isActive ? 'active' : ''}`}
                            data-station={cat.id}
                        >
                            {cat.name} ({count})
                        </button>
                    );
                })}
            </div>

            {/* Search Box */}
            <div className="drawer-search-wrapper">
                <Search className="search-icon" size={16} />
                <input
                    type="text"
                    id="track-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="गाना या कलाकार खोजें... (Search track/artist)"
                />
            </div>

            {/* Track List */}
            <div ref={listRef} className="track-list" id="track-list-container">
                {filteredTracks.map((track, idx) => {
                    const isCurrent = currentTrack && currentTrack.id === track.id;
                    return (
                        <div
                            key={`${track.id}-${idx}`}
                            ref={isCurrent ? activeItemRef : null}
                            onClick={() => onSelectTrack(track, currentStationKey)}
                            className={`track-item ${isCurrent ? 'active' : ''}`}
                        >
                            <div className="track-item-left">
                                <img
                                    src={track.art || `https://img.youtube.com/vi/${track.id}/hqdefault.jpg`}
                                    alt={track.title}
                                    className="track-item-thumb"
                                    loading="lazy"
                                />
                                <div className="track-item-info">
                                    <div className="track-item-title">{track.title}</div>
                                    <div className="track-item-sub">{track.artist}</div>
                                </div>
                            </div>
                            <div className="track-item-duration">{track.duration}</div>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
