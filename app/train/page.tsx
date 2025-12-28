'use client';

import React, { useState } from 'react';
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function TrainPage() {
    const [videoSrc, setVideoSrc] = useState("/videos/train.mp4");

    return (
        <main>
            <AudioPlayer
                src="/music/train.mp3"
                onPlay={() => setVideoSrc("/videos/train.mp4")}
            />
            <VideoBackground src={videoSrc} />
            <div className="page-container">
                <AudioPlayer
                    src="/music/train2.mp3"
                    position="100px"
                    onPlay={() => setVideoSrc("/videos/deerzoo.mp4")}
                />
                <AudioPlayer
                    src="/music/train3.mp3"
                    position="200px"
                    onPlay={() => setVideoSrc("/videos/santatrain.mp4")}
                />
                 <AudioPlayer
                    src="/music/train4.mp3"
                    position="300px"
                    onPlay={() => setVideoSrc("/videos/santatrain.mp4")}
                />
                 <AudioPlayer
                    src="/music/train5.mp3"
                    position="400px"
                    onPlay={() => setVideoSrc("/videos/santatrain.mp4")}
                />
                 <AudioPlayer
                    src="/music/train6.mp3"
                    position="500px"
                    onPlay={() => setVideoSrc("/videos/santatrain.mp4")}
                />
                <Link href="/car" className="button">
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
