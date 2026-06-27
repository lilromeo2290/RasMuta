import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samuel A. Olawale Memorial Foundation | Honoring a Broadcasting Legend",
  description:
    "The Samuel A. Olawale Memorial Foundation honors the life and legacy of a renowned broadcaster through scholarships, journalism mentorship, community outreach, and the annual Memorial Lecture.",
  keywords: [
    "Samuel Olawale",
    "memorial foundation",
    "broadcasting legend",
    "journalism mentorship",
    "scholarships",
    "memorial lecture",
    "media excellence",
  ],
  authors: [{ name: "Samuel A. Olawale Memorial Foundation" }],
  openGraph: {
    title: "Samuel A. Olawale Memorial Foundation",
    description:
      "Honoring the life, work, and enduring legacy of broadcaster Samuel A. Olawale through education, mentorship, and community development.",
    siteName: "Olawale Memorial Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel A. Olawale Memorial Foundation",
    description:
      "Honoring a broadcasting legend through scholarships, journalism mentorship, and community development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
