import { FieldError } from 'react-hook-form';

export function ErrorStateWrapper(formState: FieldError | undefined, password?: boolean) {
  return `block h-[4.8rem] w-full ${password ? 'pr-[3rem] pl-[1.2rem]' : 'px-3'} ${
    formState && 'ring-[1px] focus:!ring-red-60 active:!ring-red-60'
  }`;
}
