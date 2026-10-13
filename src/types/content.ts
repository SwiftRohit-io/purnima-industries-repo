export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface Spec {
  value: string;
  label: string;
}

export interface KeyValue {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Machine {
  machine: string;
  model: string;
  keySpec: string;
}

export interface MaterialCapacity {
  material: string;
  thickness: string;
  process: string;
}

export interface Phone {
  display: string;
  /** E.164 digits without the leading "+" (used for wa.me and tel: links) */
  e164: string;
}

export interface WorkItem {
  /** Matches the image files `src/assets/work/<slug>-600.webp` and `<slug>-1200.webp`. */
  slug: string;
  title: string;
  /** Short spec line, e.g. "Laser cut · Custom OD / ID". */
  details: string;
  /** Describes the photo for screen readers and search engines. */
  alt: string;
}

export interface WorkImage extends WorkItem {
  thumb: string;
  full: string;
}
