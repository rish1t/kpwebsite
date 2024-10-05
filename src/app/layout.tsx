import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ZodiakExtraBold = localFont({
  src: "./fonts/Zodiak-Extrabold.woff",
  variable: "--font-zodiak-extra",
  weight: "100 900",
});
const ZodiakRegular = localFont({
  src: "./fonts/Zodiak-Regular.woff",
  variable: "--font-zodiak-reg",
  weight: "100 900",
});
const ZodiakBold = localFont({
  src: "./fonts/Zodiak-Bold.woff",
  variable: "--font-zodiak-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ZodiakBold.variable} ${ZodiakExtraBold.variable} ${ZodiakRegular.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
