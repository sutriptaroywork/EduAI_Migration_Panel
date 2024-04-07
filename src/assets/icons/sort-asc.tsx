import { SVGProps } from "react";

export function SortAsc(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M27 33L29.121 30.879L34.5 36.258V6H37.5V36.258L42.879 30.879L45 33L36 42L27 33Z" />
      <path d="M24 27H3V30H24V27Z" />
      <path d="M24 18H9V21H24V18Z" />
      <path d="M24 9H15V12H24V9Z" />
    </svg>
  );
}
