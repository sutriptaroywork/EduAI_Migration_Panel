import { SVGProps } from 'react';

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 2C9.38071 2 10.5 3.11929 10.5 4.5C10.5 5.88071 9.38071 7 8 7C6.61929 7 5.5 5.88071 5.5 4.5C5.5 3.11929 6.61929 2 8 2ZM8 1C6.067 1 4.5 2.567 4.5 4.5C4.5 6.433 6.067 8 8 8C9.933 8 11.5 6.433 11.5 4.5C11.5 2.567 9.933 1 8 1ZM13 15H12V12.5C12 11.837 11.7366 11.2011 11.2678 10.7322C10.7989 10.2634 10.163 10 9.5 10H6.5C5.11929 10 4 11.1193 4 12.5V15H3V12.5C3 10.567 4.567 9 6.5 9H9.5C11.433 9 13 10.567 13 12.5V15Z'
        // fill='#5E718D'
      />
    </svg>
  );
}
