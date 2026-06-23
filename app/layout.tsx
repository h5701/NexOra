import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import ChatWidget from "@/components/chatbot/ChatWidget";
import ScrollProgressLine from "@/components/layout/ScrollProgressLine";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "NexOra Digital Studio",
  description: "Digital product studio for founders and businesses in the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        <ScrollProgressLine />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
