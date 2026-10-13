import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost' | 'whatsapp';

const base =
  'inline-flex items-center gap-2 whitespace-nowrap rounded-[3px] border-[1.5px] px-[22px] py-[13px] font-sans text-[0.95rem] font-semibold no-underline transition-[transform,background-color,color] duration-150 ease-out hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0';

const variants: Record<Variant, string> = {
  primary: 'border-accent bg-accent text-accent-ink',
  ghost: 'border-line-strong bg-transparent text-ink',
  whatsapp: 'border-whatsapp bg-whatsapp text-whatsapp-ink',
};

const buttonClasses = (variant: Variant = 'primary', className?: string) =>
  cn(base, variants[variant], className);

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

export function ButtonLink({ variant, external, className, children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={buttonClasses(variant, className)}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function Button({ variant, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
