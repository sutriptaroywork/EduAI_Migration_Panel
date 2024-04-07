/* eslint-disable @typescript-eslint/no-empty-function */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface SlideOverProps<Data> {
  children: React.ReactNode;
  size?: 'large' | 'medium';
  isOpen: boolean;
  data?: Data;
  slideFrom?: 'left' | 'right';
  handleClose: () => void;
}

export function SlideUp({
  size = 'medium',
  children,
  isOpen,
  handleClose,
}: SlideOverProps<unknown[]>) {
  let sizes = {
    medium: 'max-w-[52rem]',
    large: 'max-w-[64rem]',
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-[300] overflow-hidden '
        open={isOpen}
        onClose={() => handleClose()}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0 bg-gray-100 bg-opacity-[0.64] transition-opacity' />

          <div className='fixed inset-x-[.8rem]  bottom-[.8rem]  flex max-w-full '>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-y-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-y-full'
            >
              <div
                className={`relative z-[1000]  w-screen rounded-[.8rem] border border-gray-20 bg-gray-05 shadow-medium dark:border-dark-gray-30 dark:bg-dark-gray-05`}
              >
                <div className=' flex h-full flex-col overflow-y-auto  rounded-[.8rem]'>
                  <div className='relative flex-1  p-[1.6rem] '>{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
