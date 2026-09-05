/// <reference types="vite/client" />

declare module 'reading-time/lib/reading-time' {
  import type { Options, ReadTimeResults } from 'reading-time';

  const readingTime: (text: string, options?: Options) => ReadTimeResults;
  export default readingTime;
}
