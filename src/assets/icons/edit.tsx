import { SVGProps } from 'react';

export function Edit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M45 39H3V42H45V39Z" />
      <path d="M38.1 13.5C39.3 12.3 39.3 10.5 38.1 9.3L32.7 3.9C31.5 2.7 29.7 2.7 28.5 3.9L6 26.4V36H15.6L38.1 13.5ZM30.6 6L36 11.4L31.5 15.9L26.1 10.5L30.6 6ZM9 33V27.6L24 12.6L29.4 18L14.4 33H9Z" />
    </svg>
  );
}
