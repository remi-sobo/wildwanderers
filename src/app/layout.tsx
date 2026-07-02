import type { Metadata } from "next";
import { fraunces, jakarta } from "./fonts";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Atmosphere from "@/components/site/Atmosphere";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Wild Wanderers · outdoor movement and mentorship for boys",
  description:
    "Boys were born to move. Wild Wanderers is a weekly outdoor movement and mentorship program for boys and their dads and mentors, starting on the Baylands.",
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
