import shopFloor from '@/assets/shop-floor-laser.jpg';
import { aboutStats } from '@/data/content';
import { site } from '@/config/site';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PhotoFrame } from '@/components/ui/PhotoFrame';
import { Section } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about" alt>
      <div className="grid grid-cols-2 items-center gap-12 max-[860px]:grid-cols-1">
        <div className="text-muted">
          <Eyebrow>About The Works</Eyebrow>
          <h2 className="mt-3.5 mb-5 text-[clamp(1.7rem,3.2vw,2.4rem)] text-ink">
            Built on the shop floor, not a brochure
          </h2>
          <p className="mt-0 mb-3.5">
            Started in {site.established} on the principle that quality work earns repeat customers.{' '}
            {site.name} specialises in precision laser cutting and sheet metal fabrication out of a
            2,500 sq. ft. facility in Ambernath MIDC, built to keep pace with how fast engineering
            requirements change today.
          </p>
          <p className="m-0">
            Our capabilities span sheet metal fabrication, structural fabrication, industrial
            contracting and spare parts manufacturing. A small, hands-on team means every job gets
            direct attention from cutting through to the finished part.
          </p>
          <dl className="mt-[26px] mb-0 grid grid-cols-[repeat(3,1fr)] gap-3.5">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse justify-end border-l-2 border-accent pl-3"
              >
                <dt className="text-[0.76rem] tracking-[0.04em] uppercase">{stat.label}</dt>
                <dd className="m-0 font-mono text-[1.35rem] font-bold text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <PhotoFrame
          src={shopFloor}
          alt="James Laser CNC fiber laser and press brake machine on the Purnima Industries shop floor"
          caption={['James Laser · Fiber Laser', 'Our Shop Floor']}
        />
      </div>
    </Section>
  );
}
