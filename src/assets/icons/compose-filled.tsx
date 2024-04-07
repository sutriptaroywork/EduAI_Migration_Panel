import { SVGProps } from 'react';

export function ComposeFilled(props: SVGProps<SVGSVGElement>) {
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
        d='M13.8555 2.14488C13.788 2.07772 13.7028 2.03122 13.6098 2.01085C13.5168 1.99048 13.4199 1.99708 13.3305 2.02988L2.33049 6.02988C2.23562 6.06587 2.15395 6.12986 2.09631 6.21336C2.03868 6.29686 2.00781 6.39592 2.00781 6.49738C2.00781 6.59885 2.03868 6.69791 2.09631 6.78141C2.15395 6.86491 2.23562 6.9289 2.33049 6.96488L6.62549 8.67988L9.79549 5.49988L10.5005 6.20488L7.31549 9.38988L9.03549 13.6849C9.07254 13.7779 9.13667 13.8577 9.21958 13.9138C9.30249 13.97 9.40035 14 9.50049 13.9999C9.60153 13.9978 9.69957 13.9652 9.78169 13.9063C9.86381 13.8473 9.92615 13.7649 9.96049 13.6699L13.9605 2.66988C13.9946 2.58142 14.0028 2.4851 13.9842 2.39215C13.9656 2.29919 13.921 2.21344 13.8555 2.14488Z'
        // fill='#0F62FE'
      />
    </svg>
  );
}
