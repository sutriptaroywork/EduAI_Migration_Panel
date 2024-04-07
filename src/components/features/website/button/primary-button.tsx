import { Button } from '@/ui';
import { ReactNode } from 'react';

interface PButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'with-shadow' | 'without-shadow';
  size?: 'small' | 'medium' | 'large';
}
export function PrimaryButton(props: PButtonProps) {
  const { children, className = '', variant = 'with-shadow', size = 'xs' } = props;

  const variants = {
    'with-shadow': 'shadow-primary-btn hover:shadow-hover-primary-btn',
    'without-shadow': '',
  };
  const sizes = {
    xs: '!h-[4.8rem]',
    small: '!h-[6.4rem]',
    medium: '!h-[8rem]',
    large: '!h-[12rem]',
  };

  return (
    // <Button
    //   variant='custom'
    //   className={`primary-btn w-max group flex items-center justify-center gap-[1.6rem] rounded-full text-white ${className}`}
    //   // className={`primary-btn  !text-body-01 relative bg-primary-50  hover:bg-primary-60 group flex items-center justify-center gap-[1.6rem] rounded-full text-white border border-gray-80 w-max hover:broder-[2px] ${className}`}
    //   // className={`primary-btn  !text-body-01 relative bg-primary-50  hover:bg-primary-60 group flex items-center justify-center gap-[1.6rem] rounded-full text-white border border-gray-80 w-max hover:broder-[2px] ${className}`}
    // >
    //   <span
    //     className={`!text-body-01 relative bg-primary-50  hover:bg-primary-60 group flex items-center justify-center gap-[1.6rem] h-full p-[.8rem] rounded-full text-white border border-gray-80 w-full hover:broder-[2px] `}
    //   >
    //     {children}
    //   </span>
    // </Button>
    <Button
      variant='custom'
      className={`${variants[variant]} ${className} group w-auto outline-none relative bg-primary-50  hover:bg-primary-60 group flex items-center justify-center rounded-full text-white border-none ${sizes[size]}  primary-btn`}
      // className={`${className}  w-max`}
      // className={` w-max group flex items-center justify-center gap-[1.6rem] rounded-full text-white ${className}`}
    >
      <div
        className={`w-auto outline-none relative bg-primary-50  group-hover:bg-primary-60 group flex items-center justify-center gap-[1.6rem] rounded-full px-[1.2rem] py-[1rem] text-white  border-none `}
      >
        {children}
      </div>
    </Button>
  );
}
