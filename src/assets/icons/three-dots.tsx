import { SVGProps } from 'react';

export function ThreeDots(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 14C25.6569 14 27 12.6569 27 11C27 9.34315 25.6569 8 24 8C22.3431 8 21 9.34315 21 11C21 12.6569 22.3431 14 24 14Z" />
      <path d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z" />
      <path d="M24 40C25.6569 40 27 38.6569 27 37C27 35.3431 25.6569 34 24 34C22.3431 34 21 35.3431 21 37C21 38.6569 22.3431 40 24 40Z" />
    </svg>
  );
}
// import { SVGProps } from "react";

// export function ThreeDots(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       fill="currentColor"
//       viewBox="0 0 48 48"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <path d="M24 15C25.6569 15 27 13.6569 27 12C27 10.3431 25.6569 9 24 9C22.3431 9 21 10.3431 21 12C21 13.6569 22.3431 15 24 15Z" />
//       <path d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z" />
//       <path d="M24 39C25.6569 39 27 37.6569 27 36C27 34.3431 25.6569 33 24 33C22.3431 33 21 34.3431 21 36C21 37.6569 22.3431 39 24 39Z" />
//     </svg>
//   );
// }
