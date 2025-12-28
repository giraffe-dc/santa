import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";
import VideoPlayer from "@/components/VideoPlayer";

export default function CarPage() {
    return (
        <main>
            <VideoPlayer videoId="d5OT_46LmLo" />
            <AudioPlayer src="/music/car.mp3" />
            <VideoBackground src="/videos/car1.mp4" />
            <div className="page-container">
                {/* <AudioPlayer src="/music/car2.mp3" position="100px" /> */}
                <Link href="/walking" className="button">
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
