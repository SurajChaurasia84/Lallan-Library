'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const formattedSecs = secs < 10 ? '0' + secs : secs;

    if (hrs > 0) {
        const formattedMins = mins < 10 ? '0' + mins : mins;
        return `${hrs}:${formattedMins}:${formattedSecs}`;
    } else {
        return `${mins}:${formattedSecs}`;
    }
}

export function useAudioPlayer(stations, initialStationKey = 'all') {
    const [currentStationKey, setCurrentStationKey] = useState(initialStationKey);
    const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState('off'); // 'off' | 'all' | 'one'
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(85);
    const [isMuted, setIsMuted] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [ytReady, setYtReady] = useState(false);

    const playerRef = useRef(null);
    const progressTimerRef = useRef(null);
    const pendingPlayRef = useRef(null);

    // Keep fresh refs for event listeners to eliminate stale closures
    const stationsRef = useRef(stations);
    stationsRef.current = stations;

    const currentStationKeyRef = useRef(currentStationKey);
    currentStationKeyRef.current = currentStationKey;

    const currentTrackIdxRef = useRef(currentTrackIdx);
    currentTrackIdxRef.current = currentTrackIdx;

    const isShuffleRef = useRef(isShuffle);
    isShuffleRef.current = isShuffle;

    const repeatModeRef = useRef(repeatMode);
    repeatModeRef.current = repeatMode;

    const playTrackRef = useRef();
    const nextTrackRef = useRef();
    const handleTrackEndedRef = useRef();

    const currentStation = stations[currentStationKey] || stations['all'] || { tracks: [] };
    const currentTrack = currentStation.tracks?.[currentTrackIdx] || null;

    // Pick random song when stations are first loaded
    useEffect(() => {
        if (stations && stations['all'] && stations['all'].tracks?.length > 0 && !currentTrack) {
            const randomIdx = Math.floor(Math.random() * stations['all'].tracks.length);
            setCurrentStationKey('all');
            setCurrentTrackIdx(randomIdx);
        }
    }, [stations]);

    const playTrack = useCallback((trackOrId, autoplay = true, stationKey = currentStationKeyRef.current) => {
        const station = stationsRef.current[stationKey] || stationsRef.current['all'];
        if (!station || !station.tracks || station.tracks.length === 0) return;

        let targetTrack = null;
        let targetIdx = 0;

        if (typeof trackOrId === 'object' && trackOrId !== null) {
            targetTrack = trackOrId;
            targetIdx = station.tracks.findIndex(t => t.id === trackOrId.id);
            if (targetIdx === -1) targetIdx = 0;
        } else if (typeof trackOrId === 'string') {
            targetIdx = station.tracks.findIndex(t => t.id === trackOrId);
            if (targetIdx !== -1) {
                targetTrack = station.tracks[targetIdx];
            } else {
                targetTrack = station.tracks[0];
                targetIdx = 0;
            }
        } else if (typeof trackOrId === 'number') {
            targetIdx = trackOrId;
            if (targetIdx < 0) targetIdx = station.tracks.length - 1;
            if (targetIdx >= station.tracks.length) targetIdx = 0;
            targetTrack = station.tracks[targetIdx];
        }

        if (!targetTrack) return;

        setCurrentStationKey(stationKey);
        setCurrentTrackIdx(targetIdx);
        setCurrentTime(0);

        if (playerRef.current && playerRef.current.loadVideoById) {
            if (autoplay) {
                playerRef.current.loadVideoById(targetTrack.id);
            } else {
                playerRef.current.cueVideoById(targetTrack.id);
            }
        } else {
            pendingPlayRef.current = { id: targetTrack.id, autoplay };
        }
    }, []);

    playTrackRef.current = playTrack;

    const playTrackByIndex = useCallback((idx, autoplay = true, stationKey = currentStationKeyRef.current) => {
        playTrack(idx, autoplay, stationKey);
    }, [playTrack]);

    const nextTrack = useCallback(() => {
        const curStationKey = currentStationKeyRef.current;
        const station = stationsRef.current[curStationKey] || stationsRef.current['all'];
        if (!station || !station.tracks || station.tracks.length === 0) return;

        const curIdx = currentTrackIdxRef.current;
        const shuffle = isShuffleRef.current;

        if (shuffle && station.tracks.length > 1) {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * station.tracks.length);
            } while (nextIdx === curIdx && station.tracks.length > 1);
            playTrack(nextIdx, true, curStationKey);
        } else {
            let nextIdx = curIdx + 1;
            if (nextIdx >= station.tracks.length) {
                nextIdx = 0;
            }
            playTrack(nextIdx, true, curStationKey);
        }
    }, [playTrack]);

    nextTrackRef.current = nextTrack;

    const prevTrack = useCallback(() => {
        if (playerRef.current && playerRef.current.getCurrentTime && playerRef.current.getCurrentTime() > 4) {
            playerRef.current.seekTo(0, true);
            return;
        }
        const curStationKey = currentStationKeyRef.current;
        const station = stationsRef.current[curStationKey] || stationsRef.current['all'];
        if (!station || !station.tracks || station.tracks.length === 0) return;

        let prevIdx = currentTrackIdxRef.current - 1;
        if (prevIdx < 0) prevIdx = station.tracks.length - 1;
        playTrack(prevIdx, true, curStationKey);
    }, [playTrack]);

    const handleTrackEnded = useCallback(() => {
        const mode = repeatModeRef.current;
        if (mode === 'one') {
            if (playerRef.current && playerRef.current.seekTo) {
                playerRef.current.seekTo(0, true);
                playerRef.current.playVideo();
            }
        } else {
            nextTrack();
        }
    }, [nextTrack]);

    handleTrackEndedRef.current = handleTrackEnded;

    // Initialize YouTube Iframe Player
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('yt-hidden-player-frame', {
                height: '10',
                width: '10',
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    enablejsapi: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    rel: 0,
                    playsinline: 1
                },
                events: {
                    onReady: (event) => {
                        setYtReady(true);
                        event.target.setVolume(85);
                        if (pendingPlayRef.current) {
                            const { id, autoplay } = pendingPlayRef.current;
                            if (autoplay) {
                                event.target.loadVideoById(id);
                            } else {
                                event.target.cueVideoById(id);
                            }
                            pendingPlayRef.current = null;
                        }
                    },
                    onStateChange: (event) => {
                        const state = event.data;
                        if (state === 1) { // PLAYING
                            setIsPlaying(true);
                            const dur = event.target.getDuration() || 0;
                            if (dur > 0) setDuration(dur);
                        } else if (state === 2) { // PAUSED
                            setIsPlaying(false);
                        } else if (state === 0) { // ENDED -> Seamless Autoplay Next Track
                            setIsPlaying(false);
                            if (handleTrackEndedRef.current) {
                                handleTrackEndedRef.current();
                            }
                        }
                    },
                    onError: (event) => {
                        console.warn('YouTube player error encountered, autoplaying next track:', event.data);
                        setTimeout(() => {
                            if (nextTrackRef.current) {
                                nextTrackRef.current();
                            }
                        }, 400);
                    }
                }
            });
        };

        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        } else if (window.YT && window.YT.Player) {
            onYouTubeIframeAPIReady();
        }

        return () => {
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        };
    }, []);

    // Progress Tracker Timer
    useEffect(() => {
        if (isPlaying) {
            progressTimerRef.current = setInterval(() => {
                if (isDragging) return;
                if (playerRef.current && playerRef.current.getCurrentTime) {
                    const cur = playerRef.current.getCurrentTime() || 0;
                    const dur = playerRef.current.getDuration() || 0;
                    setCurrentTime(cur);
                    if (dur > 0) setDuration(dur);
                }
            }, 500);
        } else {
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        }

        return () => {
            if (progressTimerRef.current) clearInterval(progressTimerRef.current);
        };
    }, [isPlaying, isDragging]);

    const togglePlayPause = useCallback(() => {
        if (!playerRef.current || !ytReady) {
            if (currentTrack) {
                playTrack(currentTrack, true);
            }
            return;
        }

        try {
            const state = playerRef.current.getPlayerState ? playerRef.current.getPlayerState() : -1;
            if (state === 1) { // PLAYING
                playerRef.current.pauseVideo();
            } else if (state === 2) { // PAUSED
                playerRef.current.playVideo();
            } else {
                if (currentTrack) {
                    playerRef.current.loadVideoById(currentTrack.id);
                }
            }
        } catch (e) {
            if (currentTrack) {
                playerRef.current.loadVideoById(currentTrack.id);
            }
        }
    }, [ytReady, currentTrack, playTrack]);

    const seekTo = useCallback((targetSeconds) => {
        if (playerRef.current && playerRef.current.seekTo) {
            playerRef.current.seekTo(targetSeconds, true);
            setCurrentTime(targetSeconds);
        }
    }, []);

    const changeVolume = useCallback((val) => {
        setVolume(val);
        if (playerRef.current && playerRef.current.setVolume) {
            playerRef.current.setVolume(val);
            if (playerRef.current.isMuted && playerRef.current.isMuted()) {
                playerRef.current.unMute();
                setIsMuted(false);
            }
        }
    }, []);

    const toggleMute = useCallback(() => {
        if (!playerRef.current) return;
        if (isMuted) {
            playerRef.current.unMute?.();
            setIsMuted(false);
        } else {
            playerRef.current.mute?.();
            setIsMuted(true);
        }
    }, [isMuted]);

    const toggleShuffle = () => setIsShuffle(prev => !prev);
    
    const cycleRepeat = () => {
        setRepeatMode(prev => {
            if (prev === 'off') return 'all';
            if (prev === 'all') return 'one';
            return 'off';
        });
    };

    return {
        currentStationKey,
        currentTrackIdx,
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
        playTrack,
        playTrackByIndex,
        togglePlayPause,
        nextTrack,
        prevTrack,
        seekTo,
        changeVolume,
        toggleMute,
        toggleShuffle,
        cycleRepeat
    };
}
