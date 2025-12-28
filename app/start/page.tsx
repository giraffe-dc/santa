import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";

export default function StartPage() {
    return (
        <main>
             
            <VideoBackground src="/videos/home.mp4" />
            <div className="page-container">
                {/* <h1 className="title">Новорічна подорож <br /> із Сантою та Єдиноріжкою</h1> */}
                <Link href="/deer" className="button">
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
    