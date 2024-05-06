import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoFont = Roboto_Slab({
  subsets : ['latin'],
  weight : ['400', '700', "200", "300", "600"],
  variable : '--font-roboto'
})

export const metadata: Metadata = {
  title: "Horizon Bank",
  description: "Horizon is a modern banking platform for everyone",
  icons : '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable}`}>{children}</body>
    </html>
  );
}
