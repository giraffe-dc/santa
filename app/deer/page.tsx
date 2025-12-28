import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function DeerPage() {
    return (
        <main>
           <AudioPlayer src="/music/deep.mp3" />
            <VideoBackground src="/videos/deer.mp4" />
            <div className="page-container">
                <AudioPlayer src="/music/deep2.mp3" position="100px" />
                {/* <h1 className="title">Зустріч з Оленем</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                    Ми зустріли чарівного оленя Санти! Він готовий показати нам дорогу, але спочатку треба його погодувати чарівною морквою.
                </p> */}
                <Link href="/plane" className="button">
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
