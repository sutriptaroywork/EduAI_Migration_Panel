import { SVGProps } from 'react';

export const CaretFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="m4 10.5 4-5 4 5H4Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          transform="translate(0 .5)"
          d="M0 0h16v16H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
