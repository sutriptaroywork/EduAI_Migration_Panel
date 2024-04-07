import { SVGProps } from 'react';

export function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.6665 8H13.3332M2.6665 4H13.3332M2.6665 12H13.3332'
        // stroke='#5E718D'
        strokeLinejoin='round'
      />
    </svg>
  );
}
