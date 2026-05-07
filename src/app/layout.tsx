import type { Metadata } from "next";
import { Public_Sans, Space_Grotesk } from "next/font/google";
import NetworkIndicator from "@/components/NetworkIndicator";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NustX",
  description: "University App Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] relative overflow-x-hidden transition-colors duration-300">
        {/* Background Layer 1: Soft Tint */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#F4F9FF] to-[#EAF2F8] pointer-events-none z-[-2]"></div>
        
        {/* Background Layer 2: Subtle NUST campus illustration */}
        <div 
          className="absolute bottom-0 right-0 w-full md:w-[60%] h-[800px] pointer-events-none z-0 opacity-[0.25]"
          style={{
            backgroundImage: `url('/images/nust-bg.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom right"
          }}
        ></div>
        <NetworkIndicator />
        {children}
      </body>
    </html>
  );
}
