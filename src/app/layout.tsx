import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import MobileBottomNav from "@/app/components/headers/MobileBottomNav";
import Header from "./components/headers/Header";
import { Footer } from "./components/footer/Footer";
import ScrollToTopProgress from "@/components/ScrollToTopProgress";

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bliss-international.vercel.app"),

  title: {
    default: "Bliss International Academy",
    template: "%s | Bliss International Academy",
  },

  description:
    "Bliss International Academy is committed to academic excellence, moral values, and holistic student development in Satkhira, Bangladesh.",

  keywords: [
    "Bliss International Academy",
    "school in Satkhira",
    "education Bangladesh",
    "best school Satkhira",
    "academic excellence",
  ],

  authors: [{ name: "Bliss International Academy" }],
  creator: "Bliss International Academy",

  openGraph: {
    title: "Bliss International Academy",
    description:
      "A leading institution focused on academic excellence and character development.",
    url: "https://bliss-international.vercel.app",
    siteName: "Bliss International Academy",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Bliss International Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bliss International Academy",
    description:
      "Academic excellence and holistic student development.",
    images: ["/logo.webp"],
  },

  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable, 'scroll-smooth')}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>

          <main className="">

            <Header />

            {children}
            <MobileBottomNav />

            <Footer />

            <ScrollToTopProgress />

          </main>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "School",
                name: "Bliss International Academy",
                url: "https://bliss-international.vercel.app",
                logo: "https://bliss-international.vercel.app/logo.webp",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Satkhira",
                  addressCountry: "BD",
                },
              }),
            }}
          />

        </ThemeProvider>
      </body>
    </html>
  );
}