import { SVGProps } from 'react';

export function Cube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='672'
      height='736'
      viewBox='0 0 672 736'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <rect x='-103.5' y='-71.5' width='879' height='879' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_101_583' transform='scale(0.000416667)' />
        </pattern>
        <image
          id='image0_101_583'
          width='2400'
          height='2400'
        />
      </defs>
    </svg>
  );
}