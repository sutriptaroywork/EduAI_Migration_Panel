import type { SVGProps } from 'react';

export const Plug = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 4h-.5V1h-1v3h-3V1h-1v3H5a1 1 0 0 0-1 1v3a4.004 4.004 0 0 0 3.5 3.965V15h1v-3.035A4.004 4.004 0 0 0 12 8V5a1 1 0 0 0-1-1Zm0 4a3 3 0 0 1-6 0V5h6v3Z'
      fill='#0F62FE'
    />
  </svg>
);
