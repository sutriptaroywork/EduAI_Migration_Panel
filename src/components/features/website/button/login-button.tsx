import { Chevron } from '@/assets/icons';
import { Button } from '@/ui';

// export function LoginButton() {
//   const handleMouseEnter = () => {
//     let parentOffset = this.getBoundingClientRect(),
//       relX = e.pageX - parentOffset.left,
//       relY = e.pageY - parentOffset.top;
//     this.querySelector('span').style.top = relY + 'px';
//     this.querySelector('span').style.left = relX + 'px';
//   };

//   return (
//     <Button
//       variant='custom'
//       className='login-btn text-body-02 group  gap-[.8rem] text-left flex items-center justify-between rounded-full bg-white hover:text-white p-[.8rem] pl-[1.6rem] text-black group relative !w-[9.4rem] z-50  '
//       onMouseEnter={()=>{handleMouseEnter}}
//     >
//       <span className='relative z-50'>Log in</span>{' '}
//       {/* <span className='flex h-[2.4rem]  w-[2.4rem] items-center justify-center rounded-full bg-black text-white relative'>
//         <span className='absolute w-[.8rem]  h-[.8rem] border-t-[.2rem] border-r-[.2rem] border-white rotate-45 group-hover:right-[.7rem] arrow before:content[""] before:absolute before:w-[1rem] before:h-[.2rem] before:bg-white  before:rotate-[-45deg] before:top-[.25rem] before:left-[-.3rem] before:opacity-0 group-hover:before:opacity-[1] before:transition  before:ease-in-out'></span>
//       </span> */}
//       <span className='flex h-[2.4rem]  w-[2.4rem] items-center justify-center rounded-full bg-black text-white absolute right-[0.8rem] transition-all duration-300 ease-in  '>
//         <span className='absolute w-[.8rem]  h-[.8rem] border-t-[.2rem] border-r-[.2rem] border-white rotate-45 group-hover:right-[1rem] arrow '></span>
//       </span>
//     </Button>
//   );
// }

import { useState } from 'react';

export function LoginButton() {
  const [relX, setRelX] = useState(0);
  const [relY, setRelY] = useState(0);

  const handleMouseEnter = (e: any) => {
    const parentOffset = e.currentTarget.getBoundingClientRect();
    console.log('parentOffset', parentOffset, e.pageX, e.pageY);
    const x = e.pageX - parentOffset.left;
    const y = e.pageY - parentOffset.top;
    setRelX(x);
    setRelY(y);
  };
  const handleMouseOut = (e: any) => {
    console.log('parentOffset-leave', e.pageX, e.pageY);

    const parentOffset = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - parentOffset.left;
    const y = e.pageY - parentOffset.top;
    setRelX(x);
    setRelY(y);
  };

  // w-[9.4rem]
  return (
    <Button
      variant='custom'
      className={`login-btn text-sub-02 group gap-[.8rem] text-left flex items-center justify-between rounded-full bg-white hover:text-white p-[.8rem] pl-[1.6rem] text-black group relative whitespace-nowrap !w-max !h-[4rem] overflow-hidden `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      {' '}
      Log in
      <Chevron className='w-[1.6rem] h-[1.6rem] rotate-[-90deg] stroke-[2px]' />
      {/* <span className='w-[.8rem] group-hover:border-white  h-[.8rem] border-t-[.2rem] border-r-[.2rem] border-black rotate-45 group-hover:right-[.7rem] arrow '></span> */}
      {/* <span className='flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full bg-black text-white absolute right-[0.8rem] transition-all duration-300 ease-in'>
        <span className='absolute w-[.8rem] h-[.8rem] border-t-[.2rem] border-r-[.2rem] border-white rotate-45 group-hover:right-[1rem] arrow'></span>
      </span> */}
      <span className={`overlay-span `} style={{ top: `${relY}px`, left: `${relX}px` }}></span>
    </Button>
  );
}

export function LoginButtonWIthArrow() {
  return (
    <Button
      variant='custom'
      className='login-btn text-body-02 group  gap-[.8rem] text-left flex items-center justify-between rounded-full bg-white w-max p-[.8rem] pl-[1.6rem] text-black group relative z-50 '
    >
      <span className='relative z-50'>Log in</span>{' '}
      <span className='flex h-[2.4rem]  w-[2.4rem] items-center justify-center rounded-full bg-black text-white relative'>
        <span className='absolute w-[.8rem]  h-[.8rem] border-t-[.2rem] border-r-[.2rem] border-white rotate-45 group-hover:right-[.7rem] arrow before:content[""] before:absolute before:w-[1rem] before:h-[.2rem] before:bg-white  before:rotate-[-45deg] before:top-[.25rem] before:left-[-.3rem] before:opacity-0 group-hover:before:opacity-[1] before:transition  before:ease-in-out'></span>
      </span>
    </Button>
  );
}
