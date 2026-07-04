import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { AppFooter } from "@/components/app/app-footer";
import { AppHeader } from "@/components/app/app-header";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buddza - Tierbetreuung in deiner Nähe",
  description: "Buddza ist eine lokale Plattform für Tierbetreuung mit PLZ-basierter Suche, aktuellen Inseraten und klarem Nutzer-Dashboard.",
  icons: {
    icon: "/images/Buddza_Favicon.png",
    shortcut: "/images/Buddza_Favicon.png",
    apple: "/images/Buddza_Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fbf8f4] text-[#262C36]">
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          {children}
          <AppFooter />
        </div>
        <Toaster richColors closeButton position="top-center" />
      </body>
    </html>
  );
}
