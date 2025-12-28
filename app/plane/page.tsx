import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function PlanePage() {
    return (
        <main>
            <AudioPlayer src="/music/plane.mp3"  />
            <VideoBackground src="/videos/plane.mp4" />
            <div className="page-container">
                <AudioPlayer src="/music/plane2.mp3" position="100px" />
                <AudioPlayer src="/music/plane3.mp3" position="200px" />
                <AudioPlayer src="/music/plane4.mp3" position="300px" />
                <AudioPlayer src="/music/plane5.mp3" position="400px" />
                <AudioPlayer src="/music/plane6.mp3" position="500px" />
                {/* <AudioPlayer src="/music/deep.mp3" /> */}
                {/* <h1 className="title">Політ у літаку</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                    Ми летимо високо над хмарами! Дивись, як внизу миготять вогники міст. Єдиноріжка махає крилами поруч з ілюмінатором.
                </p> */}
                <Link href="/zoo" className="button">
                     {">>"}
                </Link>
            </div>
        </main>
    );
}
