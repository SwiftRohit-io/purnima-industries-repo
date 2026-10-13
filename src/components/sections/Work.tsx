import { useState } from 'react';
import { workGallery } from '@/data/work';
import { Lightbox } from '@/components/ui/Lightbox';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="work" alt>
      <SectionHeading
        eyebrow="Recent Work"
        title="Parts off our shop floor"
        description="A sample of recent laser cutting and bending jobs. Every part is made to the customer's drawing — tap a photo to see it full size."
      />
      <ul className="m-0 grid list-none grid-cols-3 gap-5 p-0 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
        {workGallery.map((item, i) => (
          <li key={item.slug}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View larger: ${item.title} — ${item.details}`}
              className="group block w-full cursor-zoom-in border border-line bg-bg p-2 text-left transition-[border-color,transform] duration-200 group-[.alt]/section:bg-surface-2 hover:-translate-y-[3px] hover:border-accent focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <img
                src={item.thumb}
                srcSet={`${item.thumb} 600w, ${item.full} 1200w`}
                sizes="(max-width: 480px) 92vw, (max-width: 900px) 46vw, 380px"
                alt={item.alt}
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="block aspect-square w-full object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={workGallery} index={openIndex} onChange={setOpenIndex} />
    </Section>
  );
}
