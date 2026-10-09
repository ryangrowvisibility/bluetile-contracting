import type { Metadata } from "next";
import { Zilla_Slab, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "BlueTile Contracting | Bathroom Renovations & Custom Tile in Oshawa and Durham Region",
  description:
    "Bathroom renovations, tub-to-shower conversions, custom tile, basements, drywall and painting across Oshawa, Whitby, Courtice, Bowmanville, Ajax and Pickering. 5.0 stars from 12 Google reviews. Call Anthony at (289) 980-0492.",
  openGraph: {
    title: "BlueTile Contracting | Durham Region Bathroom & Tile Renovations",
    description:
      "15+ years of bathroom, tile and interior renovations across Durham Region. 5.0 on Google. Call (289) 980-0492.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${zilla.variable} ${source.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
