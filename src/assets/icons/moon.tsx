import { SVGProps } from 'react';

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    width={16}
    height={16}
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M6.751 2.707a7.538 7.538 0 0 0 5.797 9.097A5.557 5.557 0 0 1 8.561 13.5c-.07 0-.14.002-.21 0a5.547 5.547 0 0 1-1.6-10.792Zm.74-1.207a.502.502 0 0 0-.088.008 6.548 6.548 0 0 0 .912 12.99c.082.004.164 0 .246 0a6.536 6.536 0 0 0 5.35-2.777.504.504 0 0 0-.391-.782A6.539 6.539 0 0 1 7.945 2.19a.507.507 0 0 0-.455-.69Z'
        // fill='#AAB3C3'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
