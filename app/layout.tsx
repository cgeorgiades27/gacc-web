import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Green Acres Child Care Center | Seminole, FL Preschool & VPK",
  description:
    "A local, family-owned preschool proudly serving our Seminole community for over 30 years. Welcoming 1's through VPK with a nurturing, play-based environment that feels just like home.",
  keywords: [
    "Green Acres Child Care",
    "Preschool Seminole FL",
    "Daycare Seminole FL",
    "VPK Seminole FL",
    "Childcare Pinellas County",
    "Early Learning",
    "Toddler Care",
    "Before and After School Care",
    "Summer Camp",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-g.png", type: "image/png" },
    ],
    apple: "/images/favicon-g.png",
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
