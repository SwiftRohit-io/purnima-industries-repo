import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';

interface SectionProps {
  id?: string;
  /** Alternate band: surface background with top/bottom rules. */
  alt?: boolean;
  className?: string;
  children: ReactNode;
}

export function Section({ id, alt, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'group/section py-[84px] max-[700px]:scroll-mb-[60px]',
        alt && 'alt border-y border-line bg-surface',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mb-11 max-w-[62ch]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-3.5 text-[clamp(1.7rem,3.2vw,2.4rem)]">
        {title}
      </h2>
      {description && <p className="mt-3 mb-0 text-[1.02rem] text-muted">{description}</p>}
    </div>
  );
}
