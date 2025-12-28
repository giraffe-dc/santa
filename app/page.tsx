'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState("/videos/start.mp4");

  useEffect(() => {
    const interval = setTimeout(() => {
      setVideoSrc(prev => prev === "/videos/start.mp4" ? "/videos/home.mp4" : "/videos/start.mp4");
    }, 40000);

    return () => clearTimeout(interval);
  }, []); 

  return (
    <main>
      <AudioPlayer src="/music/DZIDZIO.mp3" />
      <VideoBackground src={videoSrc} />
      <div className="page-container">
        {/* <h1 className="title">Новорічна подорож <br /> із Сантою та Єдиноріжкою</h1> */}
        <Link href="/deer" className="button">
          {">>"}
        </Link>
      </div>
    </main>
  );
}
