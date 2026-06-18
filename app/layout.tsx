import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import ScrollProgressLine from "@/components/layout/ScrollProgressLine";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <ScrollProgressLine />
        {children}
      </body>
    </html>
  );
}
