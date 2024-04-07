import { SVGProps } from 'react';

export const Cancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    // fill="none"
    fill="currentColor"
  >
    <g clipPath="url(#a)">
      <path
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm11.575 3.875-8.45-8.45a6 6 0 0 1 8.45 8.45Zm-8.455.705a6 6 0 0 1-.7-8.445l8.445 8.445a6 6 0 0 1-7.745 0Z"
        fill="#DA1E28"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
