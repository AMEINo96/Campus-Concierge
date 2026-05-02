import type { Metadata } from "next";
import { Public_Sans, Space_Grotesk } from "next/font/google";
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
  title: "Campus Concierge",
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
        {/* Background Building Illustration */}
        <div 
          className="fixed top-0 right-0 w-[800px] h-[600px] pointer-events-none z-[-1] opacity-10 md:opacity-20 dark:opacity-5 translate-x-1/4 -translate-y-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' fill='none' stroke='%231E3A8A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M400 50L400 550M350 550L450 550M350 200L450 200M330 250L470 250M300 300L500 300M400 50L300 200M400 50L500 200M380 150A20 20 0 1 1 420 150A20 20 0 1 1 380 150ZM200 550L200 300L300 300M600 550L600 300L500 300M150 550L650 550M180 300L250 230L300 300M620 300L550 230L500 300M230 400L230 550M270 400L270 550M530 400L530 550M570 400L570 550M150 350L200 350M650 350L600 350M330 550L330 450A35 35 0 0 1 400 450A35 35 0 0 1 470 450L470 550M365 450L365 550M435 450L435 550M365 350L435 350M400 350L400 450M350 350L350 400L330 400M450 350L450 400L470 400'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top right"
          }}
        ></div>
        <div className="fixed top-0 left-0 w-full h-full dark:bg-gradient-to-br dark:from-slate-900/80 dark:via-transparent dark:to-transparent pointer-events-none z-[-1]"></div>
        {children}
      </body>
    </html>
  );
}
