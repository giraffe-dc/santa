'use client';

import React from 'react';

interface VideoPlayerProps {
    videoId: string;
    position?: { top?: string; bottom?: string; left?: string; right?: string };
}

export default function VideoPlayer({ videoId, position }: VideoPlayerProps) {
    const finalPosition = position ?? { bottom: '20px', right: '20px' };

    return (
        <div
            style={{
                position: 'fixed',
                zIndex: 100,
                width: '200px',
                height: '100px',
                overflow: 'hidden',
                borderRadius: '10px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#000',
                ...finalPosition
            }}
        >
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
