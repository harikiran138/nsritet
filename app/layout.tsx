import type { Metadata, Viewport } from "next";
import { Source_Sans_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const sourceSansPro = Source_Sans_Pro({ 
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NSRIET - Excellence in Engineering Education",
  description: "NSRIET is a premier engineering institution committed to academic excellence, innovation, and industry collaboration. Explore our programs, research, and campus life.",
  keywords: "NSRIET, engineering college, technology, education, admissions, placements, research, innovation",
  authors: [{ name: "NSRIET" }],
  openGraph: {
    title: "NSRIET - Excellence in Engineering Education",
    description: "Premier engineering institution committed to academic excellence and innovation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NSRIET - Excellence in Engineering Education",
    description: "Premier engineering institution committed to academic excellence and innovation",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003366",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSansPro.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="mt-[120px] lg:mt-[140px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
