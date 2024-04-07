import * as React from 'react';
import { SVGProps } from 'react';

export const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Email"
    {...props}
  >
    <path
      d="M14 3.5H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1.1 1L8 7.89 3.1 4.5h9.8ZM2 12.5V4.955L7.715 8.91a.5.5 0 0 0 .57 0L14 4.955V12.5H2Z"
      fill="currentColor"
    />
  </svg>
);
