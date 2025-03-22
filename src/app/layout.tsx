import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import MainNavbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { services } from "@/components/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xavs",
  description: "Xavs Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black transition-all duration-300`}
        >
          <MainNavbar />
          {children}
          {/* <Footer services={services} /> */}
        </body>
      </Providers>
    </html>
  );
}
