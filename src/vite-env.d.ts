/// <reference types="vite/client" />

/* Vite treats imported .svg/.png/.jpg as URLs; these declarations tell TypeScript the import type. */
declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

/* scroll-lock has no built-in types; this allows typed use of disablePageScroll / enablePageScroll. */
declare module "scroll-lock" {
  export function disablePageScroll(): void;
  export function enablePageScroll(): void;
}
