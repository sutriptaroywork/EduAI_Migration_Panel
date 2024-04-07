import { SVGProps } from 'react';

export function Caret(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.9998 8L5.9998 13L5.29981 12.3L9.59981 8L5.2998 3.7L5.9998 3L10.9998 8Z" />
    </svg>
  );
}
