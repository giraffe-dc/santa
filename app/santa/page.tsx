import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function SantaPage() {
    return (
        <main>
            <AudioPlayer src="/music/santa.mp3" />
            <VideoBackground src="/videos/santa.mp4" />
            <div className="page-container">
                
                <Link href="/final" className="button">
                   {">>"}
                </Link>
            </div>
        </main>
    );
}
