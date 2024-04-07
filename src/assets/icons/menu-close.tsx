import type { SVGProps } from 'react';

export const MenuClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 18v-1.5h13V18H3Zm0-5.3v-1.5h10v1.5H3Zm0-5.2V6h13v1.5H3ZM19.862 7.5 15 11.988l4.888 4.512L21 15.473l-3.776-3.485 3.75-3.461L19.862 7.5Z"
      fill="currentColor"
    />
  </svg>
);
