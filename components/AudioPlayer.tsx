'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({
    src, position = '20px', onPlay
}: {
    src: string;
    position?: string;
    onPlay?: () => void;
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((err) => {
                    console.error("Autoplay failed:", err);
                });
                if (onPlay) onPlay();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: position,
                right: '20px',
                zIndex: 100,
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                padding: '10px',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
            }}
        >
            <button
                onClick={togglePlay}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
                {isPlaying ? '⏸️' : '🎵'}
            </button>
            <audio
                ref={audioRef}
                // loop
                src={src}
                style={{ display: 'none' }}
            />
        </div>
    );
}
