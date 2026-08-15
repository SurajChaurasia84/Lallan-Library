'use client';

import React, { useRef } from 'react';
import { 
    Shuffle, 
    SkipBack, 
    SkipForward, 
    Repeat, 
    Repeat1, 
    Volume2, 
    VolumeX, 
    ListMusic 
} from 'lucide-react';
import { formatTime } from '@/hooks/useAudioPlayer';

export default function PlayerDeck({ 
    player, 
    onToggleDrawer 
}) {
    const progressRef = useRef(null);

    const {
        currentTrack,
        isPlaying,
        isShuffle,
        repeatMode,
        currentTime,
        duration,
        volume,
        isMuted,
        isDragging,
        setIsDragging,
        setCurrentTime,
        togglePlayPause,
        nextTrack,
        prevTrack,
        seekTo,
        changeVolume,
        toggleMute,
        toggleShuffle,
        cycleRepeat
    } = player;

    const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

    // Smooth Touch & Pointer Drag Seeking
    const handlePointerDown = (e) => {
        if (!progressRef.current || duration <= 0) return;
        setIsDragging(true);
        updateSeekFromEvent(e);

        const onPointerMove = (moveEvt) => {
            moveEvt.preventDefault();
            updateSeekFromEvent(moveEvt);
        };

        const onPointerUp = (upEvt) => {
            setIsDragging(false);
            const rect = progressRef.current.getBoundingClientRect();
            const clientX = upEvt.clientX || (upEvt.changedTouches && upEvt.changedTouches[0] ? upEvt.changedTouches[0].clientX : 0);
            const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            seekTo(percent * duration);

            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerUp);
            window.removeEventListener('pointercancel', onPointerUp);
        };

        window.addEventListener('pointermove', onPointerMove, { passive: false });
        window.addEventListener('pointerup', onPointerUp);
        window.addEventListener('pointercancel', onPointerUp);
    };

    const updateSeekFromEvent = (e) => {
        if (!progressRef.current || duration <= 0) return;
        const rect = progressRef.current.getBoundingClientRect();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        setCurrentTime(percent * duration);
    };

    return (
        <>
            <div className="player-glass-card">
                {/* Track Art & Details */}
                <div className="player-left">
                    <div className={`cassette-artwork-wrapper ${isPlaying ? 'spinning' : ''}`} id="artwork-deck" title="Track Artwork">
                        <img 
                            id="track-art" 
                            src={currentTrack?.art || '/assets/lallan.png'} 
                            alt="Album Art" 
                            className="track-artwork-img"
                        />
                    </div>
                    <div className="track-meta">
                        <div className="track-title-wrapper">
                            <h3 id="track-title" className="track-title" title={currentTrack?.title}>
                                {currentTrack?.title || 'लल्लन लाइब्रेरी'}
                            </h3>
                        </div>
                        <p id="track-artist" className="track-artist" title={currentTrack?.artist}>
                            {currentTrack?.artist || 'Lallan Retro Beats'}
                        </p>
                    </div>
                </div>

                {/* Center: Timeline & Player Controls */}
                <div className="player-center">
                    {/* Progress Bar & Timers (Above Controls) */}
                    <div className="timeline-container">
                        <span id="current-time" className="time-label">{formatTime(currentTime)}</span>
                        <div 
                            id="progress-container"
                            ref={progressRef}
                            className={`progress-bar-wrapper ${isDragging ? 'is-dragging' : ''}`}
                            onPointerDown={handlePointerDown}
                        >
                            <div className="progress-bar-rail">
                                <div 
                                    id="progress-bar-fill"
                                    className="progress-bar-fill" 
                                    style={{ width: `${progressPercent}%` }} 
                                />
                                <div 
                                    id="progress-scrubber"
                                    className="progress-scrubber" 
                                    style={{ left: `${progressPercent}%` }} 
                                />
                            </div>
                        </div>
                        <span id="total-duration" className="time-label">{formatTime(duration || 260)}</span>
                    </div>

                    {/* Player Controls Row */}
                    <div className="player-controls">
                        <button 
                            id="shuffle-btn" 
                            onClick={toggleShuffle} 
                            className={`control-btn ${isShuffle ? 'active' : ''}`}
                            title="Shuffle / शफल (S)"
                        >
                            <Shuffle size={18} />
                        </button>

                        <button 
                            id="prev-btn" 
                            onClick={prevTrack} 
                            className="control-btn" 
                            title="Previous Song / पिछला गाना (P)"
                        >
                            <SkipBack size={20} />
                        </button>

                        <button 
                            id="play-pause-btn" 
                            onClick={togglePlayPause} 
                            className="main-play-btn" 
                            title="Play/Pause / बजाएं/रोकें (Space)"
                        >
                            {isPlaying ? (
                                <svg id="pause-icon" className="main-btn-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                </svg>
                            ) : (
                                <svg id="play-icon" className="main-btn-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path d="M7 4.5v15l12-7.5-12-7.5z"/>
                                </svg>
                            )}
                        </button>

                        <button 
                            id="next-btn" 
                            onClick={nextTrack} 
                            className="control-btn" 
                            title="Next Song / अगला गाना (N)"
                        >
                            <SkipForward size={20} />
                        </button>

                        <button 
                            id="repeat-btn" 
                            onClick={cycleRepeat} 
                            className={`control-btn ${repeatMode !== 'off' ? 'active' : ''}`}
                            title="Repeat Mode / दोहराएं (L)"
                        >
                            {repeatMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
                        </button>
                    </div>
                </div>

                {/* Right: Visualizer, Volume & Drawer Toggles */}
                <div className="player-right">
                    <div className={`mini-visualizer ${isPlaying ? 'playing' : ''}`} id="visualizer-bars" title="Audio Waveform">
                        <span className="viz-bar" />
                        <span className="viz-bar" />
                        <span className="viz-bar" />
                        <span className="viz-bar" />
                        <span className="viz-bar" />
                        <span className="viz-bar" />
                    </div>

                    <div className="volume-container">
                        <button 
                            id="mute-btn" 
                            onClick={toggleMute} 
                            className="control-btn volume-btn" 
                            title="Mute / म्यूट (M)"
                        >
                            {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <div className="volume-slider-wrapper">
                            <input 
                                type="range" 
                                id="volume-slider" 
                                min="0" 
                                max="100" 
                                value={isMuted ? 0 : volume}
                                onChange={(e) => changeVolume(parseInt(e.target.value))}
                                className="custom-range volume-range" 
                                title="Volume" 
                            />
                        </div>
                    </div>

                    <button 
                        id="queue-toggle-btn" 
                        onClick={onToggleDrawer} 
                        className="control-btn queue-btn" 
                        title="Playlist Queue / गानों की सूची (Q)"
                    >
                        <ListMusic size={18} />
                    </button>
                </div>
            </div>

            {/* Keyboard Shortcuts Helper Bar */}
            <div className="keyboard-legend">
                <div className="shortcut-item"><kbd>Space</kbd> Play/Pause</div>
                <div className="shortcut-item"><kbd>←</kbd><kbd>→</kbd> Seek 5s</div>
                <div className="shortcut-item"><kbd>N</kbd> Next</div>
                <div className="shortcut-item"><kbd>P</kbd> Prev</div>
                <div className="shortcut-item"><kbd>W</kbd> Rain/Sunset</div>
                <div className="shortcut-item"><kbd>Q</kbd> Queue</div>
                <div className="shortcut-item"><kbd>F</kbd> Fullscreen</div>
            </div>
        </>
    );
}
