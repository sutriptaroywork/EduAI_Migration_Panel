/* eslint-disable @typescript-eslint/no-empty-function */
// import { Check, Info } from 'icons';

import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { ToastStyles } from './style';

interface ToastProps extends VariantProps<typeof ToastStyles> {
  actionBtn?: ReactNode;
  className?: string;
  icon?: ReactNode;
  title: ReactNode | string;
  description?: ReactNode | string;
  // handleClose: () => void;
}
export function ToastContainer(props: ToastProps) {
  const { actionBtn, variant, className, title, description } = props;
  return (
    <div className={`${[ToastStyles({ variant }), className].join(' ')} `}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-[.8rem]'>
          {/* {icon ? icon : <CheckmarkFilled className='h-[1.6rem] w-[1.6rem]' />} */}
          <h3>{title}</h3>
        </div>

        <div className='flex items-center justify-start gap-[.8rem]'>
          {!description && actionBtn && actionBtn}
          {/* <Button
            className='!h-[3.2rem] !w-[3.2rem]  '
            onlyIcon
            variant={'fill-outline-light'}
            onClick={() => {
              handleClose();
            }}
          >
            <Close className='h-[1.6rem] w-[1.6rem] text-gray-70' />
          </Button> */}
        </div>
      </div>
      {description && (
        <div className='pl-[1.4rem]'>
          <p
            className={` ${
              variant === undefined || variant === 'default'
                ? 'text-gray-60 dark:text-dark-gray-70'
                : 'text-inherit'
            } mb-[2.4rem] mt-[1.4rem]  text-reg-body`}
          >
            {description}
          </p>
          {actionBtn && actionBtn}
        </div>
      )}
    </div>
  );
}
