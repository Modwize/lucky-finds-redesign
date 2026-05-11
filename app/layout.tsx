import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucky Finds Boutique — Authenticated Luxury Consignment",
  description:
    "Pre-loved Chanel, Louis Vuitton, Hermès and more. Every piece authenticated by AuthenticateFirst. Rockville Centre, NY since 2011.",
  authors: [{ name: "Lucky Finds Boutique" }],
  keywords: [
    "luxury consignment",
    "authenticated handbags",
    "Long Island consignment",
    "Rockville Centre",
    "pre-owned designer",
  ],
  openGraph: {
    title: "Lucky Finds Boutique — Authenticated Luxury Consignment",
    description:
      "Designer consignment with the standards of a flagship. Every piece authenticated. Every find one-of-one.",
    type: "website",
    locale: "en_US",
    siteName: "Lucky Finds Boutique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Finds Boutique",
    description: "Authenticated luxury consignment. Rockville Centre, NY.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#15291F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
