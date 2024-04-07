import { SVGProps } from 'react';

export function Expand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M18 9V10H21.293L17 14.291L17.707 15L22 10.707V14H23V9H18Z' fill='#5E718D' />
      <path d='M15 17.708L14.296 17L10 21.293V18H9V23H14V22H10.707L15 17.708Z' fill='#5E718D' />
    </svg>
  );
}
