import type { ReactNode } from 'react';
import { site, whatsappUrl } from '@/config/site';
import { cn } from '@/lib/cn';
import { Section, SectionHeading } from '@/components/ui/Section';
import { QuoteForm } from './QuoteForm';

interface ContactMethodProps {
  icon: string;
  iconClassName: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const methodClass =
  'flex items-center gap-4 border border-line bg-surface px-[18px] py-4 text-ink no-underline transition-colors duration-200';

function ContactMethod({ icon, iconClassName, label, value, href, external }: ContactMethodProps) {
  const content: ReactNode = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'flex size-10 shrink-0 items-center justify-center rounded-full text-[1.1rem]',
          iconClassName,
        )}
      >
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[0.78rem] tracking-[0.06em] text-muted uppercase">
          {label}
        </span>
        <span className="block text-base font-semibold break-all">{value}</span>
      </span>
    </>
  );

  if (!href) return <div className={methodClass}>{content}</div>;

  return (
    <a
      href={href}
      className={cn(methodClass, 'hover:border-accent')}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {content}
    </a>
  );
}

const whatsappIcon = 'bg-whatsapp text-whatsapp-ink';

export function Contact() {
  const { primary, secondary } = site.phones;

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Send us your drawing, get a quote"
        description="Fill the form and it opens a pre-filled email straight to us — or skip straight to WhatsApp for a faster reply."
      />
      <div className="grid grid-cols-2 items-start gap-10 max-[900px]:grid-cols-1">
        <div className="flex flex-col gap-4">
          <ContactMethod
            icon="☎"
            iconClassName={whatsappIcon}
            label="WhatsApp"
            value={primary.display}
            href={whatsappUrl(primary)}
            external
          />
          <ContactMethod
            icon="☎"
            iconClassName={whatsappIcon}
            label="WhatsApp"
            value={secondary.display}
            href={whatsappUrl(secondary)}
            external
          />
          <ContactMethod
            icon="✉"
            iconClassName="bg-accent-soft text-accent"
            label="Email"
            value={site.email}
            href={`mailto:${site.email}`}
          />
          <ContactMethod
            icon="📍"
            iconClassName="bg-surface-2"
            label="Works"
            value={site.address.short}
          />
        </div>
        <QuoteForm />
      </div>
    </Section>
  );
}
