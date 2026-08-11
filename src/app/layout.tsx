import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delhi Metal Corporation — Steel & Metal Supplier in Delhi",
  description:
    "Delhi Metal Corporation — trusted supplier of TMT bars, mild steel, structural steel, pipes, sheets and coils in Delhi. Mill-direct sourcing, certified quality, just-in-time delivery.",
  keywords: [
    "Delhi Metal Corporation",
    "steel supplier Delhi",
    "TMT bars Delhi",
    "mild steel Delhi",
    "structural steel supplier",
    "steel pipes Delhi",
    "metal trading company India",
  ],
  openGraph: {
    title: "Delhi Metal Corporation — Steel & Metal Supplier in Delhi",
    description:
      "Mill-direct steel and metal supply for construction, fabrication and infrastructure in Delhi NCR.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-bone font-display selection:bg-molten selection:text-ink">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
