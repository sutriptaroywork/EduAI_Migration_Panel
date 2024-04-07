import { SVGProps } from 'react';

export function ContactUsCircleBg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='130'
      height='138'
      viewBox='0 0 130 138'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line x1='65.5' y1='2.18557e-08' x2='65.5' y2='81' stroke='url(#paint0_linear_128_244)' />
      <g filter='url(#filter0_dddii_128_244)'>
        <circle cx='65' cy='73' r='12' fill='#9362F3' />
      </g>
      <defs>
        <filter
          id='filter0_dddii_128_244'
          x='0'
          y='8'
          width='130'
          height='130'
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
          <feMorphology
            radius='8'
            operator='dilate'
            in='SourceAlpha'
            result='effect1_dropShadow_128_244'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.807843 0 0 0 0 0.721569 0 0 0 0 1 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_128_244' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='8'
            operator='dilate'
            in='SourceAlpha'
            result='effect2_dropShadow_128_244'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='17' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.752941 0 0 0 0 0.619608 0 0 0 0 1 0 0 0 0.62 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_dropShadow_128_244'
            result='effect2_dropShadow_128_244'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='16'
            operator='dilate'
            in='SourceAlpha'
            result='effect3_dropShadow_128_244'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='18.5' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.576471 0 0 0 0 0.384314 0 0 0 0 0.952941 0 0 0 0.22 0'
          />
          <feBlend
            mode='normal'
            in2='effect2_dropShadow_128_244'
            result='effect3_dropShadow_128_244'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect3_dropShadow_128_244'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-1' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.145098 0 0 0 0 0.145098 0 0 0 0 0.521569 0 0 0 0.16 0'
          />
          <feBlend mode='normal' in2='shape' result='effect4_innerShadow_128_244' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='1' />
          <feGaussianBlur stdDeviation='0.5' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.16 0' />
          <feBlend
            mode='normal'
            in2='effect4_innerShadow_128_244'
            result='effect5_innerShadow_128_244'
          />
        </filter>
        <linearGradient
          id='paint0_linear_128_244'
          x1='65'
          y1='0.5'
          x2='65'
          y2='81.5'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' stopOpacity='0' />
          <stop offset='1' stopColor='#C09EFF' />
        </linearGradient>
      </defs>
    </svg>
  );
}
