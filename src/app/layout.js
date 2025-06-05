import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thunderbolts* Directory",
  description: "รายชื่อสมาชิกทีม Thunderbolts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* โหลด CSS จาก public/stylesheets/style.css */}
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}