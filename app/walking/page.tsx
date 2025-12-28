import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";
import VideoPlayer from "@/components/VideoPlayer";

export default function WalkingPage() {
    return (
        <main>
            <AudioPlayer src="/music/walking.mp3" />
            <VideoBackground src="/videos/walking.mp4" />
            <div className="page-container">
                {/* <AudioPlayer src="/music/walking2.mp3" position="100px" /> */}
                <VideoPlayer videoId="ls_E3rRi85U" />   
                <Link href="/santa" className="button">
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
