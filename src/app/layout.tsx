import Navbar from "@/components/Navbar";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar /> {/* Ye line Navbar ko har page ke top par dikhayegi */}
        <main>{children}</main> {/* Yahan page.tsx ka content load hoga */}
      </body>
    </html>
  );
}
