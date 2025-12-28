import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import AudioPlayer from "@/components/AudioPlayer";
export default function FinalPage() {
    return (
        <main>
            <AudioPlayer src="/music/santa2.mp3"  />
            <VideoBackground src="/videos/final1.mp4" />
            <div className="page-container">
                {/* <h1 className="title">З Новим Роком!</h1> */}
                {/* <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                    Вітаємо! Наша подорож завершилась. Нехай цей рік принесе багато радості, див та здійснення мрій!
                </p> */}
                <Link href="/" className="button" style={{ filter: 'hue-rotate(90deg)' }}>
                    {">>"}
                </Link>
            </div>
        </main>
    );
}
