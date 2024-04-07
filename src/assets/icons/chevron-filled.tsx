import { SVGProps } from 'react';

export function ChevronFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_406_5684)">
        <path d="M10 12L5 8L10 4L10 12Z" />
      </g>
      <defs>
        <clipPath id="clip0_406_5684">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
