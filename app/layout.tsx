import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import InstitutionHeader from "@/components/InstitutionHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const sourceSans = Source_Sans_3({ 
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
      <body className={`${sourceSans.variable} antialiased`}>
        <ThemeProvider>
          {/* Top utility bar */}
          <div className="bg-corporate-blue text-white text-sm py-3">
            <div className="section-container py-3 hidden lg:flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="font-bold tracking-wide px-2">NSRIET</div>
              </div>
              <div className="flex items-center gap-3">
                <a href="/notifications" className="px-2 hover:opacity-90">Circular Notification</a>
                <span className="opacity-60">|</span>
                <a href="/events" className="px-2 hover:opacity-90">Upcoming Events</a>
                <span className="opacity-60">|</span>
                <a href="/feedback" className="px-2 hover:opacity-90">Feedback</a>
                <span className="opacity-60">|</span>
                <a href="/news" className="px-2 hover:opacity-90">News Bulletin</a>
                <span className="opacity-60">|</span>
                <a href="/careers" className="px-2 hover:opacity-90">Career Opportunities</a>
              </div>
            </div>
          </div>

          <InstitutionHeader />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
