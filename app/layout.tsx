import type { Metadata } from "next";
import { Sora, Instrument_Sans } from "next/font/google";
import "./globals.css";
import BottomMarquee from "@/components/BottomMarquee";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JBP",
  description: "JBP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${instrumentSans.variable} antialiased`}
      >
        {children}
        {/* <BottomMarquee /> */}
      </body>
    </html>
  );
}
