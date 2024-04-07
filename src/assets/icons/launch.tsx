import type { SVGProps } from 'react';

export const Launch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 14H3a1.001 1.001 0 0 1-1-1V3a1.001 1.001 0 0 1 1-1h5v1H3v10h10V8h1v5a1.001 1.001 0 0 1-1 1Z'
      fill='currentColor'
    />
    <path d='M10 1v1h3.293L9 6.293 9.707 7 14 2.707V6h1V1h-5Z' fill='currentColor' />
  </svg>
);
