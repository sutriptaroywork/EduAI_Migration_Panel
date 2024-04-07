import { ReactNode } from 'react';

interface LoginContainerProp {
  children: ReactNode;
  heading: string;
  helperText?: string;
}

export function LoginContainer({ children, heading, helperText }: LoginContainerProp) {
  return (
    <div className=' w-[50rem]  rounded-[.8rem] border border-gray-30 bg-white p-[2.4rem] shadow-small '>
      <h5 className=' text-gray-80 text-heading-05 '>{heading}</h5>
      {helperText ? (
        <p className='mb-[2.4rem] mt-[.8rem] text-gray-60 text-reg-body  dark:text-dark-gray-70'>
          {helperText}
        </p>
      ) : null}
      <div className='mt-[2.4rem]'>{children}</div>
    </div>
  );
}
