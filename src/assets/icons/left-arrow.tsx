import { SVGProps } from 'react';

export function LeftArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 13L7.705 12.295L3.915 8.5H14V7.5H3.915L7.705 3.705L7 3L2 8L7 13Z" />
    </svg>
  );
}
