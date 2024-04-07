import { SVGProps } from 'react';

export function UpArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="CurrentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 3.5V4.5H11.295L3 12.795L3.705 13.5L12 5.205V11.5H13V3.5H5Z" />
    </svg>
  );
}
