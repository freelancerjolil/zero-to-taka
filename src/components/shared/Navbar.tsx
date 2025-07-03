'use client';

import { NAV_ITEMS } from '@/lib/constants';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button } from '../ui/button';

// Navbar component with sticky positioning and responsive mobile menu
export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(() => NAV_ITEMS, []);

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-navbar transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-display gradient-text transition-colors hover:brightness-110"
          aria-label="Go to Zero to Taka homepage"
        >
          Zero to Taka
        </Link>
        {/* Navigation and Actions */}
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-foreground-strong transition-colors px-2 py-1 rounded-md hover:bg-card/50"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-foreground-strong focus:outline-none focus:ring-2 focus:ring-primary-gradient-from p-2 rounded-md"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
            {/* Mobile Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-background/95 border-b border-border shadow-lg animate-fade-in">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:text-foreground-strong hover:bg-card transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Go to ${item.label}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:inline-flex text-sm md:text-base px-3 py-1.5 rounded-full hover:bg-card/50"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
