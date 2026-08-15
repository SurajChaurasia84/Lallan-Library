'use client';

import React from 'react';

export default function HeroSection({ totalTracks }) {
    return (
        <main className="center-stage">
            <div className="hero-center-content">
                <div className="hero-tracks-tag">
                    {totalTracks > 0 ? `${totalTracks} TRACKS · NON-STOP` : '285 TRACKS · NON-STOP'}
                </div>
                <h2 className="hero-hindi-title">लल्लन लाइब्रेरी</h2>
                <p className="hero-subtext">मूड का ठेका, लल्लन के नाम</p>
            </div>
        </main>
    );
}
