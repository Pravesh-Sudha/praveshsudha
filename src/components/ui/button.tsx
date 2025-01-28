import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex gap-2 lg:gap-3 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/70 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90', // Matches the primary branding color
        destructive:
          'bg-red-500 text-white shadow-sm hover:bg-red-600', // Adjusted to a simpler and clearer destructive variant
        outline:
          'border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100 hover:text-gray-900', // Softer outline style
        secondary:
          'bg-secondary text-white shadow-sm hover:bg-secondary/80', // Simplified secondary button variant
        ghost: 'hover:bg-gray-50 text-gray-600 hover:text-gray-800', // Neutral ghost button style
        link: 'text-primary underline-offset-4 hover:underline', // Emphasis on link-style buttons
      },
      size: {
        default: 'px-5 py-2.5 text-base', // Adjusted default for broader use
        sm: 'h-8 px-3 text-sm', // Smaller buttons for compact layouts
        lg: 'text-lg px-6 py-3', // Larger buttons for emphasis
        icon: 'h-9 w-9', // Icon-only buttons
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
