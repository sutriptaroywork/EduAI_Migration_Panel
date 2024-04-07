import { SVGProps } from 'react';

export function Chevron(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 33.0004L9 18.0004L11.1 15.9004L24 28.8004L36.9 15.9004L39 18.0004L24 33.0004Z" />
    </svg>
  );
}
