import { SVGProps } from 'react';

export function Delete(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 18H18V36H21V18Z" />
      <path d="M30 18H27V36H30V18Z" />
      <path d="M6 9V12H9V42C9 42.7957 9.31607 43.5587 9.87868 44.1213C10.4413 44.6839 11.2044 45 12 45H36C36.7956 45 37.5587 44.6839 38.1213 44.1213C38.6839 43.5587 39 42.7957 39 42V12H42V9H6ZM12 42V12H36V42H12Z" />
      <path d="M30 3H18V6H30V3Z" />
    </svg>
  );
}
