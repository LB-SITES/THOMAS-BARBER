import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const buttonVariants = cva('inline-flex items-center justify-center gap-3 rounded-sm text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C] disabled:pointer-events-none disabled:opacity-50', { variants: { variant: { default: 'bg-[#C9A45C] text-[#111111] hover:bg-[#dfbd7d]', outline: 'border border-white/25 text-white hover:bg-white/10' }, size: { default: 'px-6 py-3.5', lg: 'px-7 py-4' } }, defaultVariants: { variant: 'default', size: 'default' } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) { const Comp = asChild ? Slot : 'button'; return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />; }
