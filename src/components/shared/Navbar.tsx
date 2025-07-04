'use client';

import { NAV_LINKS } from '@/lib/navlinks';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

// UPGRADE: Extracted the link logic into a reusable sub-component.
// This makes the main Navbar component much cleaner and easier to maintain.
// NavItem sub-component is unchanged and already excellent.
function NavItem({
  href,
  label,
  isMobile = false,
  onClick,
}: {
  href: string;
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors hover:text-foreground-strong',
        isMobile ? 'block px-6 py-3' : 'rounded-md px-2 py-1',
        isActive ? 'text-primary' : 'text-foreground',
        isMobile && isActive && 'bg-card'
      )}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = NAV_LINKS;

  // UPGRADE: This useEffect now correctly handles the logic.
  useEffect(() => {
    if (isOpen) {
      // When the menu opens, add `overflow-hidden` to the <body>
      // to prevent the background from scrolling.
      document.body.classList.add('overflow-hidden');
    } else {
      // When the menu closes, remove the class to restore scrolling.
      document.body.classList.remove('overflow-hidden');
    }

    // A cleanup function to ensure scrolling is restored if the user
    // navigates away while the menu is open.
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]); // This effect runs only when `isOpen` changes. // 4. The effect re-runs whenever `isOpen` changes.

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-border bg-background/80 shadow-navbar backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl gradient-text sm:text-2xl"
          aria-label="Go to homepage"
        >
          Zero to Taka
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map(({ href, label }) => (
            <NavItem key={href} href={href} label={label} />
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {/* UPGRADE: Using a transition for a smoother open/close animation */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out md:hidden',
          isOpen ? 'max-h-96 border-t border-border' : 'max-h-0'
        )}
      >
        <div className="py-2">
          {navItems.map((item) => {
            const { href, label } = item;
            return (
              <NavItem
                key={href}
                href={href}
                label={label}
                isMobile
                onClick={() => setIsOpen(false)}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}
