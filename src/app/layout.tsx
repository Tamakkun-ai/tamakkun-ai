import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAMAKKUN AI - AI-Powered Talent Acquisition for MENA",
  description: "End-to-end Talent Acquisition outsourcing platform powered by AI. We deliver fully vetted, assessed, and role-matched candidates to SMEs and startups across MENA.",
  keywords: ["AI recruitment", "Talent Acquisition", "MENA", "AI hiring", "recruitment outsourcing"],
  icons: {
    icon: '/assets/fav.ico',
    shortcut: '/assets/fav.ico',
    apple: '/assets/fav.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
