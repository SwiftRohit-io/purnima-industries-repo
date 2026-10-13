import type { ReactNode } from 'react';
import worksGate from '@/assets/works-gate-900.webp';
import worksGateSmall from '@/assets/works-gate-480.webp';
import { mapsDirectionsUrl, mapsSearchUrl, site } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';

/** Stylised site-plan graphic (no third-party map embed, so no tracking or API key). */
function SitePlan({ children }: { children?: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={`Site plan showing ${site.name} at Plot A-46, Ambernath MIDC`}
      className="relative min-h-[340px] overflow-hidden border border-line bg-surface-2 bg-blueprint bg-size-[32px_32px]"
    >
      <div className="absolute inset-x-0 top-[38%] h-2.5 bg-ink/22 max-[500px]:top-[46%]" />
      <div className="absolute inset-y-0 left-[62%] w-2.5 bg-ink/22" />
      <div className="absolute top-[18px] right-[18px] flex size-[34px] items-center justify-center rounded-full border-[1.5px] border-line-strong font-mono text-[0.65rem] font-bold text-muted">
        N
      </div>
      <div className="absolute top-[38%] left-[62%] z-2 flex -translate-x-1/2 -translate-y-full flex-col items-center max-[500px]:top-[46%]">
        <div className="relative size-[34px] -rotate-45 rounded-[50%_50%_50%_0] border-[3px] border-bg bg-accent shadow-[0_3px_10px_var(--shadow)] after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-1/2 after:rounded-full after:bg-bg after:content-['']" />
        <div className="mt-1.5 bg-ink px-2 py-[3px] font-mono text-[0.7rem] whitespace-nowrap text-bg">
          {site.address.plot}
        </div>
      </div>
      {children}
    </div>
  );
}

export function Location() {
  return (
    <Section id="location" alt>
      <SectionHeading eyebrow="Find Us" title="On the shop floor in Ambernath MIDC" />
      <div className="grid grid-cols-[1fr_1.3fr] items-stretch gap-7 max-[860px]:grid-cols-1">
        <div className="flex flex-col justify-between gap-6 border border-line bg-bg p-7">
          <div>
            <span className="mb-2.5 block font-mono text-[0.72rem] tracking-[0.1em] text-muted uppercase">
              Works Address
            </span>
            <address className="text-base leading-[1.6] not-italic">
              {site.name}
              {site.address.lines.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </address>
          </div>
          <img
            src={worksGate}
            srcSet={`${worksGateSmall} 480w, ${worksGate} 900w`}
            sizes="(max-width: 860px) calc(100vw - 106px), 420px"
            width={900}
            height={667}
            alt="Purnima Industries works gate, Plot A-46, Ambernath MIDC"
            loading="lazy"
            decoding="async"
            className="h-40 w-full border border-line object-cover"
          />
          <ButtonLink href={mapsDirectionsUrl} external className="justify-center">
            Get Directions
          </ButtonLink>
        </div>

        <SitePlan>
          <div className="absolute inset-x-5 bottom-5 z-3">
            <ButtonLink href={mapsSearchUrl} external className="w-full justify-center">
              Open Live Location in Google Maps
            </ButtonLink>
          </div>
        </SitePlan>
      </div>
    </Section>
  );
}
