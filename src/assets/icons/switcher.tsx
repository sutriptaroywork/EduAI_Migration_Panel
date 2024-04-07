import { SVGProps } from 'react';

export function Switcher(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9 2H7V4H9V2Z' />
      <path d='M4 2H2V4H4V2Z' />
      <path d='M14 2H12V4H14V2Z' />
      <path d='M9 7H7V9H9V7Z' />
      <path d='M4 7H2V9H4V7Z' />
      <path d='M14 7H12V9H14V7Z' />
      <path d='M9 12H7V14H9V12Z' />
      <path d='M4 12H2V14H4V12Z' />
      <path d='M14 12H12V14H14V12Z' />
    </svg>
  );
}
