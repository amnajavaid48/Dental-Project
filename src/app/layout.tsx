import Navbar from "@/components/Navbar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
