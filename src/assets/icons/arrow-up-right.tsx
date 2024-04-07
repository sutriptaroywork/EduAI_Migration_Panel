import { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 9V12H33.885L9 36.885L11.115 39L36 14.115V33H39V9H15Z" />
    </svg>
  );
}
