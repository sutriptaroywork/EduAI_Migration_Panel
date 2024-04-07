import { SVGProps } from 'react';

export function BulletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M5.81 11.588C5.6 10.384 4.746 8.872 3.122 7.654C2.324 7.052 1.512 6.66 0.714 6.492V5.904C2.296 5.526 3.85 4.462 4.844 3.02C5.348 2.292 5.67 1.578 5.81 0.836H6.398C6.636 2.25 7.728 3.818 9.212 4.868C9.94 5.386 10.696 5.736 11.466 5.904V6.492C9.912 6.814 8.106 8.2 7.21 9.614C6.762 10.328 6.496 10.986 6.398 11.588H5.81Z'
        fill='#D8A800'
      />
    </svg>
  );
}
