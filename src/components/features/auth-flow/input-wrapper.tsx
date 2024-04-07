import { ReactNode } from 'react';

interface LoginInputWrapperProp {
  children: ReactNode;
}
export function InputWrapper({ children }: LoginInputWrapperProp) {
  return <div className='h-[8.6rem]'>{children}</div>;
}
