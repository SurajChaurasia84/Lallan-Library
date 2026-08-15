'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PwaBanner() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if already installed or in standalone mode
        const isStandalone = (
            window.matchMedia('(display-mode: standalone)').matches ||
            window.matchMedia('(display-mode: fullscreen)').matches ||
            window.navigator.standalone === true ||
            document.referrer.includes('android-app://') ||
            localStorage.getItem('pwa_installed') === 'true'
        );

        if (isStandalone || sessionStorage.getItem('pwa_banner_closed')) {
            return;
        }

        const handleBeforeInstall = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsVisible(true);
        };

        const handleAppInstalled = () => {
            localStorage.setItem('pwa_installed', 'true');
            setIsVisible(false);
            setDeferredPrompt(null);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstall);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                localStorage.setItem('pwa_installed', 'true');
            }
            setDeferredPrompt(null);
            setIsVisible(false);
        } else {
            setIsVisible(false);
            alert("ऐप इंस्टॉल करने के लिए अपने ब्राउज़र मेन्यू (⋮ या शेयर) पर जाकर 'Add to Home screen' या 'Install app' चुनें।");
        }
    };

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem('pwa_banner_closed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="pwa-install-banner">
            <div className="pwa-banner-card">
                <div className="pwa-icon-box">
                    <img src="/assets/lallan.png" alt="लल्लन" className="pwa-app-icon" />
                </div>
                <div className="pwa-text-box">
                    <div className="pwa-title">Add Lallan Library to home screen</div>
                    <div className="pwa-sub">One tap, no app store, no account</div>
                </div>
                <button onClick={handleInstall} className="pwa-add-btn">Add</button>
                <button onClick={handleDismiss} className="pwa-close-btn" aria-label="Dismiss">
                    <X size={18} />
                </button>
            </div>
        </div>
    );
}
