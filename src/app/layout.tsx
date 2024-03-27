import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Head } from 'next/document'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Distribuzon",
  description: "Portal",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
          <Toaster />
          {children}
      </body>
    </html>
  );
}
