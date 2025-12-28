'use client';

import React from 'react';

interface VideoBackgroundProps {
  src?: string;
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}
    >
      {src ? (
        <video
          key={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Winter night gradient
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem' }}>
            Video Background Placeholder
          </span>
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.2)', // Slight overlay
        }}
      />
    </div>
  );
}
