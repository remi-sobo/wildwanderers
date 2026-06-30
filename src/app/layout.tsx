import type { Metadata } from "next";
import { fraunces, jakarta } from "./fonts";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Atmosphere from "@/components/site/Atmosphere";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Wild Wanderers — movement, nature, connection",
  description:
    "Whole-person wellness for the whole family, built on movement, nature, and real connection. Our flagship is a boys' program out on the Baylands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="relative flex min-h-screen flex-col">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        {/* Spans the whole document, above the section fills, below the nav. */}
        <Atmosphere />
      </body>
    </html>
  );
}
