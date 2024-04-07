import { SVGProps } from 'react';

export function Download(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 12V14H3V12H2V14L2.0038 13.9976C2.00333 14.1288 2.02873 14.2589 2.07854 14.3803C2.12836 14.5017 2.20163 14.6121 2.29414 14.7052C2.38666 14.7983 2.49662 14.8723 2.61774 14.9229C2.73885 14.9734 2.86875 14.9997 3 15H13C13.2652 15 13.5196 14.8946 13.7071 14.7071C13.8946 14.5196 14 14.2652 14 14V12H13Z"
        // fill="#0F62FE"
      />
      <path
        d="M3 7L3.7055 6.2975L7.5 10.0875V1H8.5V10.0875L12.2955 6.2975L13 7L8 12L3 7Z"
        // fill="#0F62FE"
      />
    </svg>
  );
}
