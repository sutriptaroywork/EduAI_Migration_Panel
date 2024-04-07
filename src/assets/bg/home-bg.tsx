import { SVGProps } from 'react';

export function HomeBg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='1056'
      height='667'
      viewBox='0 0 1056 667'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_d_130_2850)'>
        <ellipse
          cx='527.5'
          cy='341.5'
          rx='584.5'
          ry='321.5'
          fill='url(#paint0_linear_130_2850)'
          shapeRendering='crispEdges'
        />
        <path
          d='M1111 341.5C1111 429.747 1045.96 509.854 940.322 567.959C834.722 626.043 688.77 662 527.5 662C366.23 662 220.278 626.043 114.678 567.959C9.04234 509.854 -56 429.747 -56 341.5C-56 253.253 9.04234 173.146 114.678 115.041C220.278 56.957 366.23 21 527.5 21C688.77 21 834.722 56.957 940.322 115.041C1045.96 173.146 1111 253.253 1111 341.5Z'
          stroke='url(#paint1_linear_130_2850)'
          strokeWidth='2'
          shapeRendering='crispEdges'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_130_2850'
          x='-69'
          y='0'
          width='1193'
          height='667'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-8' />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.556863 0 0 0 0 0.392157 0 0 0 0 1 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_130_2850' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_130_2850'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_130_2850'
          x1='527.5'
          y1='-184'
          x2='527.5'
          y2='72.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CEB8FF' />
          <stop offset='1' stopColor='#8E64FF' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_130_2850'
          x1='527.5'
          y1='20'
          x2='527.5'
          y2='156.107'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#B484FF' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
}
