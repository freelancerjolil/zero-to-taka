import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { cn } from '@/lib/utils'; // PRO-TIP: See explanation below
import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme/ThemeProvider';

// --- FONT SETUP ---
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
});
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['800'],
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400'],
});

// --- METADATA & VIEWPORT ---
export const metadata: Metadata = {
  // PRO-TIP: Add `metadataBase` to avoid repeating your base URL.
  metadataBase: new URL('https://zerototaka.com'),
  title: {
    template: '%s | Zero to Taka',
    default: 'Zero to Taka - The Dev-preneur Roadmap',
  },
  // ... (rest of your excellent metadata object is unchanged)
  description:
    'The complete roadmap for Bangladeshi developers to turn code into cash. Learn to build, launch, and monetize your own digital products.',
  // ... etc.
};

export const viewport: Viewport = {
  // ... (your excellent viewport object is unchanged)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'dark',
        inter.variable,
        jakartaSans.variable,
        jetBrainsMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main
            className="w-full flex-1 lg:px-6 md:px-8"
            aria-label="Main content"
          >
            <div className="mx-auto h-full max-w-screen-xl">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
