import { ThemeProviderProps } from 'next-themes';

// Navigation item type for navbar and footer links
export interface NavItem {
  href: string;
  label: string;
}

// Theme-related types
export interface ThemeContextProps extends ThemeProviderProps {
  children: React.ReactNode;
}

// Generic component props type
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // Allow additional props for flexibility
}

// Example type for future API responses (e.g., user data)
export interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'developer' | 'devpreneur';
}

export interface Blueprint {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  mainImageUrl?: string; // <-- ADD THIS NEW OPTIONAL PROPERTY
}
