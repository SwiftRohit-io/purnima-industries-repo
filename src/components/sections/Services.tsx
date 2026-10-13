import { services } from '@/data/content';
import type { Service } from '@/types/content';
import { Section, SectionHeading } from '@/components/ui/Section';

function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="relative border border-line bg-bg px-[22px] py-[26px] transition-[border-color,transform] duration-200 group-[.alt]/section:bg-surface-2 hover:-translate-y-[3px] hover:border-accent">
      <span
        aria-hidden="true"
        className="absolute -top-px -left-px size-3 border-t-2 border-l-2 border-line-strong"
      />
      <span
        aria-hidden="true"
        className="absolute -right-px -bottom-px size-3 border-r-2 border-b-2 border-line-strong"
      />
      <span className="font-mono text-[0.78rem] tracking-[0.06em] text-accent">{service.id}</span>
      <h3 className="mt-3 mb-2.5 text-[1.12rem] tracking-normal normal-case">{service.title}</h3>
      <p className="m-0 text-[0.92rem] text-muted">{service.description}</p>
    </li>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="One shop floor, every process your drawing needs"
        description="From a single flat-pattern DXF to a finished, coated assembly — cutting, bending and fabrication under one roof, with cable tray manufacturing as a dedicated line."
      />
      <ul className="m-0 grid list-none grid-cols-3 gap-5 p-0 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </Section>
  );
}
