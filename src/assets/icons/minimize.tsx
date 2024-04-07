import { SVGProps } from 'react';

export function Minimize(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2886_9335)">
        <path d="M6 27V30H15.879L3 42.873L5.121 45L18 32.121V42H21V27H6Z" />
        <path d="M45 5.124L42.888 3L30 15.879V6H27V21H42V18H32.121L45 5.124Z" />
      </g>
      <defs>
        <clipPath id="clip0_2886_9335">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
