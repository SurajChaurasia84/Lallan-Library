'use client';

import React, { useEffect, useRef } from 'react';

export default function WeatherCanvas({ isRainMode }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const drops = [];
        const dropCount = 140;
        for (let i = 0; i < dropCount; i++) {
            drops.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                len: Math.random() * 20 + 12,
                speed: Math.random() * 7 + 9,
                opacity: Math.random() * 0.35 + 0.15
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (isRainMode) {
                ctx.strokeStyle = 'rgba(186, 230, 253, 0.4)';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                for (let i = 0; i < drops.length; i++) {
                    const d = drops[i];
                    ctx.moveTo(d.x, d.y);
                    ctx.lineTo(d.x - 2, d.y + d.len);
                    d.y += d.speed;
                    d.x -= 1;
                    if (d.y > canvas.height) {
                        d.y = -d.len;
                        d.x = Math.random() * canvas.width;
                    }
                }
                ctx.stroke();
            }
            animId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, [isRainMode]);

    return (
        <canvas 
            ref={canvasRef} 
            className={`rain-canvas ${isRainMode ? 'active' : ''}`}
        />
    );
}
