import { SVGProps } from 'react';

export function FirstCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='101'
      height='90'
      viewBox='0 0 101 90'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_b_130_3715)'>
        <path
          d='M13.9535 46.0824C13.9535 40.3676 15.0791 34.7087 17.2661 29.4289C19.4531 24.1491 22.6585 19.3517 26.6995 15.3107C30.7405 11.2698 35.5379 8.06426 40.8177 5.87729C46.0975 3.69032 51.7564 2.5647 57.4712 2.5647C63.1861 2.5647 68.8449 3.69032 74.1248 5.87729C79.4046 8.06426 84.2019 11.2698 88.2429 15.3108C92.2839 19.3517 95.4894 24.1491 97.6764 29.4289C99.8634 34.7087 100.989 40.3676 100.989 46.0824L13.9535 46.0824Z'
          fill='url(#paint0_linear_130_3715)'
        />
      </g>
      <path
        d='M87.0356 43.5186C87.0356 49.2334 85.91 54.8923 83.723 60.1721C81.536 65.4519 78.3306 70.2493 74.2896 74.2902C70.2486 78.3312 65.4512 81.5367 60.1714 83.7237C54.8916 85.9107 49.2327 87.0363 43.5179 87.0363C37.803 87.0363 32.1442 85.9107 26.8643 83.7237C21.5845 81.5367 16.7872 78.3312 12.7462 74.2902C8.70518 70.2493 5.49968 65.4519 3.31271 60.1721C1.12574 54.8923 0.000121696 49.2334 0.00012207 43.5186L87.0356 43.5186Z'
        fill='#9362F3'
      />
      <defs>
        <filter
          id='filter0_b_130_3715'
          x='10.327'
          y='-1.06178'
          width='94.2885'
          height='50.7708'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='1.81324' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_130_3715' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_130_3715'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_130_3715'
          x1='57.4712'
          y1='89.6002'
          x2='57.4712'
          y2='2.5647'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#6633EE' stopOpacity='0.19' />
          <stop offset='1' stopColor='#C09EFF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
