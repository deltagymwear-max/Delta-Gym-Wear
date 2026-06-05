import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://deltagymwear.com"),
  title: { default: "Delta Gym Wear", template: "%s | Delta Gym Wear" },
  description: "Performance apparel engineered for disciplined training.",
  openGraph: {
    title: "Delta Gym Wear",
    description: "Function first. Always.",
    images: ["/images/delta-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
