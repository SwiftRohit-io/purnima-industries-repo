import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'my-[1em] flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.12em] text-accent uppercase',
        "before:inline-block before:h-0.5 before:w-[22px] before:bg-accent before:content-['']",
        className,
      )}
    >
      {children}
    </p>
  );
}
