/* eslint-disable @typescript-eslint/no-empty-function */
/* This example requires Tailwind CSS v2.0+ */
import { Close } from '@/assets/icons';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Button } from '../button';

interface SlideOverProps<Data> {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  isOpen: boolean;
  data?: Data;
  slideFrom?: 'left' | 'right' | 'bottom';
  handleClose: () => void;
  title: string;
  description?: string;
  position?: 'absolute' | 'relative';
}

export function MobileSlideOver({
  size = 'medium',
  children,
  isOpen,
  handleClose,
  slideFrom = 'bottom',
  title = '',
  description = '',
  position = 'absolute',
}: SlideOverProps<unknown[]>) {
  let sizes = {
    small: 'max-w-[32rem]',
    medium: 'max-w-[52rem]',
    large: 'max-w-[64rem]',
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-[300] overflow-hidden  overflow-y-auto '
        open={isOpen}
        onClose={() => handleClose()}
      >
        <div className='absolute inset-0 overflow-hidden  overflow-y-auto '>
          <Dialog.Overlay
            className={`absolute inset-0 bg-gray-100 bg-opacity-[0.64] transition-opacity`}
          />

          <div
            className={` ${
              slideFrom === 'right' && 'inset-y-[0rem] right-[0rem]'
            }   flex h-full max-w-full`}
          >
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-y-[95%]'
              enterTo='translate-y-0'
              leaveFrom='translate-y-[100%]'
              leaveTo='translate-y-[100%]'
            >
              <div
                className={` w-screen ${sizes[size]} ${position} bottom-0  z-[1000]  border border-gray-20 bg-gray-05 shadow-medium dark:border-dark-gray-30 dark:bg-dark-gray-05`}
              >
                <div className='bg-gray-05 dark:bg-dark-gray-05'>
                  <div className='mt-[1.6rem] flex  items-center justify-between  px-[1.6rem] pb-[0.8rem] '>
                    <h2 className='text-med-body'>{title}</h2>
                    <Button
                      onlyIcon
                      variant='ghost-light'
                      onClick={() => handleClose()}
                      className='w-max'
                    >
                      <Close width={16} height={16} className='cursor-pointer' />
                    </Button>
                  </div>

                  {description && (
                    <div className='px-[1.6rem] pb-[2.4rem]  text-gray-60 text-reg-body dark:text-dark-gray-70'>
                      <p>{description}</p>
                    </div>
                  )}

                  <div className=' flex h-full flex-col overflow-y-auto  '>
                    <div className='relative flex-1'>{children}</div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
