import type { WorkImage, WorkItem } from '@/types/content';

/**
 * Recent work gallery. To add a photo:
 *   1. Save two square WebP files to src/assets/work/: `<slug>-600.webp` and `<slug>-1200.webp`
 *   2. Add an entry below with the same slug.
 */
export const workItems: WorkItem[] = [
  {
    slug: 'ss304-angle-bending',
    title: 'SS 304 Angle Bending',
    details: 'CNC press brake · Custom size as per drawing',
    alt: 'Stainless steel 304 angle bent on a CNC press brake',
  },
  {
    slug: 'laser-cut-edge',
    title: 'Clean Laser Cut Edge',
    details: 'Straight, smooth cut on thick MS plate',
    alt: 'Close-up of a straight, smooth fiber-laser cut edge on thick mild steel plate',
  },
  {
    slug: 'ms-ring-plate',
    title: 'MS Ring Plate',
    details: 'Laser cut · Custom OD / ID · Up to 25 mm',
    alt: 'Laser cut mild steel ring plate with marked positions, lying on the shop floor',
  },
  {
    slug: 'six-hole-flange-plate',
    title: '6-Hole Flange Plate',
    details: 'Laser cut holes · Custom PCD',
    alt: 'Laser cut steel flange plate with six bolt holes on a custom pitch circle diameter',
  },
];

const files = import.meta.glob<string>('../assets/work/*.webp', {
  eager: true,
  import: 'default',
});

function imageUrl(slug: string, size: 600 | 1200): string {
  const url = files[`../assets/work/${slug}-${size}.webp`];
  if (!url) throw new Error(`Missing gallery image: src/assets/work/${slug}-${size}.webp`);
  return url;
}

export const workGallery: WorkImage[] = workItems.map((item) => ({
  ...item,
  thumb: imageUrl(item.slug, 600),
  full: imageUrl(item.slug, 1200),
}));
