import { Footer } from '@/components/shared/Footer'; // Assuming Footer is also in shared
import { Navbar } from '@/components/shared/Navbar'; // Updated import path
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme/ThemeProvider';

// Load Google Fonts with variable support and optimized loading
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '700'], // Common weights for body text
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['800'], // Bold for headings
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'], // Default weight for code
});

// Static SEO Metadata Configuration for best practice
export const metadata: Metadata = {
  title: {
    template: '%s | Zero to Taka',
    default: 'Zero to Taka - The Dev-preneur Roadmap',
  },
  description:
    'The complete roadmap for Bangladeshi developers to turn code into cash. Learn to build, launch, and monetize your own digital products.',
  keywords: [
    'Dev-preneur',
    'Bangladesh',
    'coding',
    'entrepreneurship',
    'SaaS',
    'Next.js',
    'MERN',
    'make money online',
    'developer',
  ],
  authors: [{ name: 'Zero to Taka Team', url: 'https://zerototaka.com' }], // Replace with your URL later
  openGraph: {
    title: 'Zero to Taka: The Dev-preneur Roadmap',
    description:
      'Turn your coding skills into a successful business in Bangladesh.',
    url: 'https://zerototaka.com', // Replace with your URL later
    siteName: 'Zero to Taka',
    images: [
      {
        url: 'https://zerototaka.com/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Zero to Taka - From Code to Cash',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero to Taka: The Dev-preneur Roadmap',
    description:
      'Turn your coding skills into a successful business in Bangladesh.',
    images: ['https://zerototaka.com/og-image.png'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Viewport and Theme Color Configuration (The Correct Way)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Good for accessibility
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakartaSans.variable} ${jetBrainsMono.variable} dark h-full`}
    >
      <body className="flex flex-col min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme={undefined}
        >
          {/* Fixed Navbar with backdrop blur, responsive collapse */}
          <Navbar />
          {/* Main content area with responsive padding and max-width, accessible */}
          <main
            className="flex-1 px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[90%] sm:max-w-[85%] md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto"
            aria-label="Main content"
          >
            {children}
          </main>
          {/* Footer with responsive layout */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
