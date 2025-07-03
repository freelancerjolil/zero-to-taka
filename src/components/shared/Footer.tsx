import Link from 'next/link';

// Footer component with responsive layout
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-card border-t border-border py-6 mt-8"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright and Info */}
          <p className="text-muted-foreground text-sm md:text-base">
            © {currentYear} Zero to Taka. All rights reserved.
          </p>
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="/terms"
              className="text-foreground hover:text-foreground-strong transition-colors text-sm md:text-base"
              aria-label="View terms of service"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-foreground hover:text-foreground-strong transition-colors text-sm md:text-base"
              aria-label="View privacy policy"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-foreground-strong transition-colors text-sm md:text-base"
              aria-label="Contact us"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
