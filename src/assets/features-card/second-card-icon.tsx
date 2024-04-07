import { SVGProps } from 'react';

export function SecondCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='138'
      height='92'
      viewBox='0 0 138 92'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_b_130_3722)'>
        <rect
          x='137.601'
          y='31.9995'
          width='59.7334'
          height='89.6001'
          rx='29.8667'
          transform='rotate(90 137.601 31.9995)'
          fill='url(#paint0_linear_130_3722)'
          fillOpacity='0.64'
        />
      </g>
      <rect
        x='89.6016'
        width='59.7334'
        height='89.6001'
        rx='29.8667'
        transform='rotate(90 89.6016 0)'
        fill='#6144BD'
      />
      <defs>
        <filter
          id='filter0_b_130_3722'
          x='44.374'
          y='28.373'
          width='96.8531'
          height='66.9864'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='1.81324' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_130_3722' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_130_3722'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_130_3722'
          x1='167.94'
          y1='132.39'
          x2='167.467'
          y2='31.9995'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#252585' stopOpacity='0.54' />
          <stop offset='0.0001' stopColor='#252585' stopOpacity='0.18' />
          <stop offset='1' stopColor='#8E64FF' stopOpacity='0.63' />
        </linearGradient>
      </defs>
    </svg>
  );
}
