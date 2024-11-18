import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-redHat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Countdown Timer",
  description: "Countdown 14 days",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHat.variable} antialiased`}>{children}</body>
    </html>
  );
}
