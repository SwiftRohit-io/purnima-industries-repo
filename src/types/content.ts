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
