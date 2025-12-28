'use client';

import React, { useState } from 'react';
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function ZooPage() {
    const [videoSrc, setVideoSrc] = useState("/videos/zoo.mp4");

    return (
        <main>
            <AudioPlayer
                src="/music/zoo_1.mp3"
                onPlay={() => setVideoSrc("/videos/zoo.mp4")}
            />
            <VideoBackground src={videoSrc} />
            <div className="page-container">
                <AudioPlayer
                    src="/music/zoo_2.mp3"
                    position="100px"
                    onPlay={() => setVideoSrc("/videos/zoo1.mp4")}
                />
                <AudioPlayer
                    src="/music/zoo_3.mp3"
                    position="200px"
                    onPlay={() => setVideoSrc("/videos/zoo2.mp4")}
                />
                <AudioPlayer
                    src="/music/zoo_4.mp3"
                    position="300px"
                    onPlay={() => setVideoSrc("/videos/zoo3.mp4")}
                />
                <AudioPlayer
                    src="/music/zoo_5.mp3"
                    position="400px"
                    onPlay={() => setVideoSrc("/videos/zoo4.mp4")}
                />

                <Link href="/train" className="button">
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
