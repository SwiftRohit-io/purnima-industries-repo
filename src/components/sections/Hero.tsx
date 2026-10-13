import { heroSpecs, worksData } from '@/data/content';
import { site } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-line pt-[72px] pb-[88px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-blueprint mask-[linear-gradient(to_bottom,black,transparent_85%)] bg-size-[40px_40px] opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute -top-[60px] -right-20 size-[420px] rounded-full bg-perforated opacity-12"
      />

      <Container className="relative grid grid-cols-[1.15fr_0.85fr] items-start gap-14 max-[900px]:grid-cols-1">
        <div>
          <Eyebrow>Ambernath MIDC, Maharashtra &middot; Since {site.established}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-[18px] mb-5 text-[clamp(2.4rem,5.2vw,3.9rem)] leading-[1.03]"
          >
            Sheet metal, <em className="text-accent not-italic">cut</em>. Bent.{' '}
            <em className="text-accent not-italic">Fabricated.</em>
            <br />
            Done right.
          </h1>
          <p className="mt-0 mb-[30px] max-w-[52ch] text-[1.12rem] text-muted">
            {site.name} runs fiber-laser cutting and CNC press-brake bending in-house — not just
            cable tray, we take on full cutting, bending and fabrication work for industrial,
            defence-ancillary and export clients.
          </p>
          <div className="mb-10 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Request a Quote</ButtonLink>
            <ButtonLink variant="ghost" href="#services">
              See What We Fabricate
            </ButtonLink>
          </div>

          <dl className="m-0 grid grid-cols-[repeat(3,1fr)] overflow-hidden rounded border border-line bg-surface">
            {heroSpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col-reverse justify-end border-r border-line px-3.5 py-4 last:border-r-0"
              >
                <dt className="text-[0.78rem] tracking-[0.04em] text-muted uppercase">
                  {spec.label}
                </dt>
                <dd className="m-0 font-mono text-[1.3rem] font-bold text-accent">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside
          aria-label="Works data"
          className="relative border-2 border-line-strong bg-surface px-6 py-7 before:pointer-events-none before:absolute before:inset-2.5 before:border before:border-dashed before:border-line before:content-['']"
        >
          <div className="mb-3.5 font-mono text-[0.72rem] tracking-[0.1em] text-muted uppercase">
            Works Data &mdash; Rev. 2026
          </div>
          <dl className="m-0 flex flex-col gap-[13px]">
            {worksData.map((row) => (
              <div
                key={row.label}
                className="flex justify-between gap-2.5 border-b border-dotted border-line pb-3 text-[0.9rem] last:border-b-0 last:pb-0"
              >
                <dt className="text-muted">{row.label}</dt>
                <dd className="m-0 text-right font-mono font-semibold">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  );
}
