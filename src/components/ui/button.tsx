import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles =
      'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-gradient-from';

    const variants = {
      default: 'gradient-bg text-white hover:brightness-110',
      outline:
        'border border-primary-gradient-from text-primary-gradient-from hover:bg-primary-gradient-from/10',
      ghost: 'text-primary-gradient-from hover:bg-primary-gradient-from/10',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
