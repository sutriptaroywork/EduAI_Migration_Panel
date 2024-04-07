import { SVGProps } from 'react';

export const Chat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    fill="curretColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.87 15.5 8 15l2-3.5h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4.5v1H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.42l-1.71 3Z" />
    <path d="M12 5.5H4v1h8v-1ZM9 8.5H4v1h5v-1Z" />
  </svg>
);
