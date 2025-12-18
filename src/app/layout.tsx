import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // 👈 1. استيراد النافبار الجديد

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Ali Platform",
  description: "Medical Education Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar /> {/* 👈 2. وضع النافبار هنا بشكل نظيف ومختصر */}

        {children}

        <Footer />
        
      </body>
    </html>
  );
}