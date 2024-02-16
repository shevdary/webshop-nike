
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeRegistry} from "@/app/config/theme/theme-registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webshop",
  description: "Our personal webshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeRegistry>{children}</ThemeRegistry></body>
    </html>
  );
}
