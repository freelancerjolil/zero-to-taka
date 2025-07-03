'use client';

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes';
import { useEffect, useState } from 'react';

// Custom ThemeProvider to manage theme state and ensure dark mode by default
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents rendering on server to avoid flash of incorrect theme
  }

  return (
    <NextThemesProvider defaultTheme="dark" attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
