import { SVGProps } from 'react';

export function ThirdCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='141'
      height='90'
      viewBox='0 0 141 90'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g filter='url(#filter0_b_130_3736)'>
        <ellipse
          cx='96.0006'
          cy='44.8005'
          rx='44.8'
          ry='44.8'
          fill='url(#paint0_linear_130_3736)'
          fillOpacity='0.64'
        />
      </g>
      <g filter='url(#filter1_b_130_3736)'>
        <ellipse
          cx='70.4008'
          cy='44.8003'
          rx='44.8'
          ry='44.8'
          fill='url(#paint1_linear_130_3736)'
          fillOpacity='0.64'
        />
      </g>
      <ellipse cx='44.8002' cy='44.8005' rx='44.8' ry='44.8' fill='#C09EFF' />
      <defs>
        <filter
          id='filter0_b_130_3736'
          x='47.5742'
          y='-3.62599'
          width='96.8528'
          height='96.8531'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='1.81324' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_130_3736' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_130_3736'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_b_130_3736'
          x='18.7768'
          y='-6.82375'
          width='103.248'
          height='103.248'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='3.412' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_130_3736' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_130_3736'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_130_3736'
          x1='59.2007'
          y1='44.8005'
          x2='140.801'
          y2='44.8005'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#6633EE' stopOpacity='0.19' />
          <stop offset='1' stopColor='#C09EFF' stopOpacity='0.8' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_130_3736'
          x1='12.8008'
          y1='44.8003'
          x2='115.201'
          y2='44.8003'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#6633EE' stopOpacity='0.19' />
          <stop offset='1' stopColor='#C09EFF' stopOpacity='0.8' />
        </linearGradient>
      </defs>
    </svg>
  );
}
