import { SVGProps } from 'react';

export const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox='0 0 20 20'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path d='M10 7.503a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-1.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.255 3.374l-.884.884 2.191 2.191.884-.884-2.191-2.191ZM4.375 9.378H1.25v1.25h3.125v-1.25ZM5.562 13.557l-2.19 2.191.883.884 2.191-2.191-.884-.884ZM10.625 15.628h-1.25v3.125h1.25v-3.125ZM14.438 13.557l-.883.884 2.19 2.191.885-.884-2.191-2.19ZM18.75 9.378h-3.125v1.25h3.125v-1.25ZM15.746 3.374l-2.191 2.191.883.884 2.192-2.191-.884-.884ZM10.625 1.253h-1.25v3.125h1.25V1.253Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h20v20H0z' />
      </clipPath>
    </defs>
  </svg>
);
