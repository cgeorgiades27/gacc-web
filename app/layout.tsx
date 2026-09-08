import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Green Acres Child Care Center | Seminole, FL Daycare & VPK",
  description:
    "A local, family-owned daycare proudly serving our Seminole community for over 25 years. Welcoming 1's through VPK with a nurturing, play-based environment that feels just like home.",
  keywords: [
    "Green Acres Child Care",
    "Daycare Seminole FL",
    "VPK Seminole FL",
    "Childcare Pinellas County",
    "Early Learning",
    "Toddler Care",
    "After School Care",
    "Summer Camp",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-800 selection:bg-[#276840] selection:text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
