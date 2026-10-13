/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_QUOTE_EMAIL?: string;
  readonly VITE_GTAG_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
