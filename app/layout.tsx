import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Новорічна подорож",
  description: "Інтерактивний сайт для дітей",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={nunito.className}>
        {/* <AudioPlayer /> */}
        {children}
      </body>
    </html>
  );
}
