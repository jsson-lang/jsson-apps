import { mergeProps } from '@base-ui-components/react/merge-props';
import { useRender } from '@base-ui-components/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none border border-transparent bg-clip-padding font-bold uppercase tracking-widest text-xs outline-none transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'min-h-8 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)]',
        icon: 'size-8',
        'icon-lg': 'size-9',
        'icon-sm': 'size-7',
        'icon-xl': "size-10 [&_svg:not([class*='size-'])]:size-4.5",
        'icon-xs': "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        lg: 'min-h-9 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2)-1px)]',
        sm: 'min-h-7 gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]',
        xl: "min-h-10 px-[calc(--spacing(4)-1px)] py-[calc(--spacing(2)-1px)] text-base [&_svg:not([class*='size-'])]:size-4.5",
        xs: "min-h-6 gap-1 rounded-none px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1)-1px)] text-xs [&_svg:not([class*='size-'])]:size-3",
      },
      variant: {
        default:
          'border-foreground bg-foreground text-background hover:bg-foreground/90 transition-colors',
        destructive:
          'border-destructive bg-destructive text-white hover:bg-destructive/90 transition-colors',
        'destructive-outline':
          'border-border bg-transparent text-destructive hover:border-destructive hover:bg-destructive/5 transition-colors',
        ghost: 'border-transparent text-foreground hover:bg-foreground/10 transition-colors',
        link: 'border-transparent text-foreground underline-offset-4 hover:underline transition-all',
        outline:
          'border-border bg-background text-foreground hover:border-foreground hover:bg-foreground/5 transition-colors',
        secondary:
          'border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors',
      },
    },
  },
);

interface ButtonProps extends useRender.ComponentProps<'button'> {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>['type'] = render
    ? undefined
    : 'button';

  const defaultProps = {
    className: cn(buttonVariants({ className, size, variant })),
    'data-slot': 'button',
    type: typeValue,
  };

  return useRender({
    defaultTagName: 'button',
    props: mergeProps<'button'>(defaultProps, props),
    render,
  });
}

export { Button, buttonVariants };
