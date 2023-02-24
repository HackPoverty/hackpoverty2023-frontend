/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_JSON_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
