import { SVGProps } from 'react';

export function Maximize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2886_9336)">
        <path d="M30 3V6H39.879L27 18.873L29.121 21L42 8.121V18H45V3H30Z" />
        <path d="M21 29.124L18.888 27L6 39.879V30H3V45H18V42H8.121L21 29.124Z" />
      </g>
      <defs>
        <clipPath id="clip0_2886_9336">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
