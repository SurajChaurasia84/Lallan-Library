'use client';

import React, { useEffect, useRef } from 'react';

export default function AmbientParticlesCanvas({ isRainMode }) {
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

        class DustMote {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * canvas.width;
                this.y = initial ? Math.random() * canvas.height : canvas.height + Math.random() * 25;
                this.size = Math.random() * 2.6 + 0.9;
                this.speedY = Math.random() * 0.42 + 0.18; // Float upwards
                this.speedX = (Math.random() - 0.5) * 0.25;
                this.baseAlpha = Math.random() * 0.45 + 0.25;
                this.pulseSpeed = Math.random() * 0.02 + 0.008;
                this.pulseVal = Math.random() * Math.PI * 2;
                this.colorVariant = Math.random();
            }

            update() {
                this.y -= this.speedY;
                this.pulseVal += this.pulseSpeed;
                this.x += this.speedX + Math.sin(this.pulseVal) * 0.22;
                this.alpha = Math.max(0.08, this.baseAlpha + Math.sin(this.pulseVal) * 0.18);

                if (this.y < -15 || this.x < -15 || this.x > canvas.width + 15) {
                    this.reset(false);
                }
            }

            draw(context) {
                context.save();
                context.beginPath();
                context.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);

                // Sunset warm golden & amber tones
                const rgb = this.colorVariant > 0.4 
                    ? '251, 191, 36'   // Golden Amber
                    : (this.colorVariant > 0.15 ? '245, 158, 11' : '255, 237, 213'); // Warm Sunlight / Chai Steam

                const grad = context.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 2
                );
                grad.addColorStop(0, `rgba(${rgb}, ${this.alpha * 1.2})`);
                grad.addColorStop(0.5, `rgba(${rgb}, ${this.alpha * 0.55})`);
                grad.addColorStop(1, `rgba(${rgb}, 0)`);

                context.fillStyle = grad;
                context.fill();

                // Soft bright inner core
                context.beginPath();
                context.arc(this.x, this.y, this.size * 0.5, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 250, 240, ${this.alpha * 0.9})`;
                context.fill();
                context.restore();
            }
        }

        const count = 60;
        const motes = [];
        for (let i = 0; i < count; i++) {
            motes.push(new DustMote());
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Render particles ONLY when NOT in Rain mode (only during Sunset/शाम)
            if (!isRainMode) {
                for (let i = 0; i < motes.length; i++) {
                    motes[i].update();
                    motes[i].draw(ctx);
                }
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
            id="ambient-canvas"
            className={`ambient-canvas ${isRainMode ? 'hidden' : ''}`}
            style={{
                opacity: isRainMode ? 0 : 1,
                transition: 'opacity 1.5s ease',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 2
            }}
        />
    );
}
