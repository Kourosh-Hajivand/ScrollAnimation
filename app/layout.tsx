import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kourosh Hajivand",
  description: "Front end Developer Next.js React",
  icons: {
    icon: "/Logo-White1.png",
    href: "/Logo-White1.png"
  },
  openGraph: {
    title: 'kourosh H',
    description: 'Front end Developer Next.js React',
    images: "/Logo-White1.png"
  },
  authors: {
    name: "Kourosh H",
    url: "https://www.kourosh-h.ir/"
  }

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
