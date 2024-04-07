import { SVGProps } from 'react';

export function WarningFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 3C12.45 3 3 12.45 3 24C3 35.55 12.45 45 24 45C35.55 45 45 35.55 45 24C45 12.45 35.55 3 24 3ZM22.35 12H25.65V28.5H22.35V12ZM24 37.5C22.8 37.5 21.75 36.45 21.75 35.25C21.75 34.05 22.8 33 24 33C25.2 33 26.25 34.05 26.25 35.25C26.25 36.45 25.2 37.5 24 37.5Z" />
    </svg>
  );
}
