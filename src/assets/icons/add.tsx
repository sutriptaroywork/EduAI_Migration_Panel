import { SVGProps } from 'react';

export function Add(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_982_70702)'>
        <path d='M8.5 7.5V4H7.5V7.5H4V8.5H7.5V12H8.5V8.5H12V7.5H8.5Z' fill='currentColor' />
      </g>
      <defs>
        <clipPath id='clip0_982_70702'>
          <rect width='16' height='16' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
}
