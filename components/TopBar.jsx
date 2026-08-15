'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Users, Sun, CloudRain, Maximize, Minimize } from 'lucide-react';

export default function TopBar({ isRainMode, onToggleWeather }) {
    const [timeStr, setTimeStr] = useState('--:--:-- --');
    const [visitors, setVisitors] = useState(0);
    const [onlineUsers, setOnlineUsers] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Digital Clock
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            setTimeStr(`${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`);
        };
        updateClock();
        const timer = setInterval(updateClock, 1000);
        return () => clearInterval(timer);
    }, []);

    // Total Visitors & Heartbeat
    useEffect(() => {
        fetch('/api/visitors')
            .then(res => res.json())
            .then(data => {
                if (data && typeof data.count !== 'undefined') {
                    setVisitors(data.count);
                }
            })
            .catch(() => {});

        let tabSessionId = sessionStorage.getItem('lallan_tab_session');
        if (!tabSessionId) {
            tabSessionId = 'tab_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
            sessionStorage.setItem('lallan_tab_session', tabSessionId);
        }

        const pingHeartbeat = () => {
            fetch(`/api/heartbeat?session=${encodeURIComponent(tabSessionId)}`)
                .then(res => res.json())
                .then(data => {
                    if (data && data.online) {
                        setOnlineUsers(data.online);
                    }
                })
                .catch(() => {});
        };

        pingHeartbeat();
        const heartbeatTimer = setInterval(pingHeartbeat, 8000);

        const handleLeave = () => {
            if (navigator.sendBeacon) {
                navigator.sendBeacon(`/api/heartbeat/leave?session=${encodeURIComponent(tabSessionId)}`);
            }
        };
        window.addEventListener('beforeunload', handleLeave);
        window.addEventListener('pagehide', handleLeave);

        return () => {
            clearInterval(heartbeatTimer);
            window.removeEventListener('beforeunload', handleLeave);
            window.removeEventListener('pagehide', handleLeave);
        };
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen?.();
            setIsFullscreen(false);
        }
    };

    return (
        <header className="top-bar">
            {/* Top Left: Logo & Live Stats */}
            <div className="brand-badge" title="लाइव समय और कुल विज़िटर्स">
                <div className="brand-icon-wrapper">
                    <img src="/assets/lallan.png" alt="लल्लन Logo" className="brand-logo-img" />
                </div>
                <div className="brand-stats-group">
                    <div className="brand-stat-row">
                        <Clock size={13} className="brand-stat-icon" />
                        <span id="digital-clock" className="brand-stat-val">{timeStr}</span>
                    </div>
                    <div className="brand-stat-row">
                        <Users size={12} className="brand-stat-icon" />
                        <span id="total-visitor-count" className="brand-stat-val">
                            {visitors.toLocaleString()} Visitors
                        </span>
                    </div>
                </div>
            </div>

            {/* Top Right: Live Stats & Quick Actions */}
            <div className="header-right">
                {/* Live Listeners Counter */}
                <div className="quick-pill live-pill" title="लोग अभी साथ में सुन रहे हैं (Live Online)">
                    <span className="live-dot" />
                    <span id="live-listeners-count" className="live-count">{onlineUsers}</span>
                </div>

                {/* Weather / Ambience Mood Toggle */}
                <div 
                    id="weather-toggle-btn"
                    className={`quick-pill weather-pill ${isRainMode ? 'is-rain' : ''}`} 
                    onClick={onToggleWeather}
                    title="Toggle Weather / मौसम बदलें (W)"
                >
                    {isRainMode ? (
                        <CloudRain size={16} className="pill-icon" color="#60a5fa" />
                    ) : (
                        <Sun size={16} className="pill-icon" color="#fbbf24" />
                    )}
                    <span id="weather-status-text" className="pill-text">
                        {isRainMode ? 'बारिश (Rain)' : 'शाम (Sunset)'}
                    </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="header-actions">
                    <button 
                        id="fullscreen-btn" 
                        onClick={toggleFullscreen} 
                        className="icon-btn" 
                        title="Fullscreen / फुलस्क्रीन (F)"
                    >
                        {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
