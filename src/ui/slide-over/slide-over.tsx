/* eslint-disable @typescript-eslint/no-empty-function */
/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface SlideOverProps<Data> {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  isOpen: boolean;
  data?: Data;
  slideFrom?: 'left' | 'right' | 'bottom';
  handleClose: () => void;
  top?: '5.6' | '0';
  variant?: 'with-padding' | 'with-out-padding';
}

export function SlideOver({
  size = 'medium',
  children,
  isOpen,
  handleClose,
  slideFrom = 'right',
  top = '0',
  variant = 'with-padding',
}: SlideOverProps<unknown[]>) {
  let sizes = {
    small: 'max-w-[32rem]',
    medium: 'max-w-[64rem]',
    large: 'max-w-[64rem]',
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        static
        className={`fixed inset-0 top-[${top}rem] z-[300] overflow-hidden `}
        open={isOpen}
        onClose={() => handleClose()}
      >
        <div className={`absolute inset-0 overflow-hidden`}>
          <Dialog.Overlay
            className={`absolute inset-0 bg-gray-100 bg-opacity-[0.64] transition-opacity`}
          />

          <div
            className={`fixed ${
              slideFrom === 'right' && `inset-y-[0rem] right-[0rem] top-[${top}rem]`
            }  flex h-screen max-w-full `}
          >
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom={`${
                slideFrom === 'left'
                  ? 'translate-x-[-100%]'
                  : slideFrom === 'bottom'
                  ? 'translate-y-[100%]'
                  : 'translate-x-full'
              }`}
              enterTo={`${slideFrom === 'bottom' ? 'translate-y-0' : 'translate-x-0'}`}
              leaveFrom={`${
                slideFrom === 'left'
                  ? 'translate-x-[-100%]'
                  : slideFrom === 'bottom'
                  ? 'translate-y-[100%]'
                  : 'translate-x-0'
              }`}
              leaveTo={`${
                slideFrom === 'left'
                  ? 'translate-x-[-100%]'
                  : slideFrom === 'bottom'
                  ? 'translate-y-[100%]'
                  : 'translate-x-full'
              }`}
              // enterFrom='translate-x-full'
              // enterTo='translate-x-0'
              // leaveFrom='translate-x-0'
              // leaveTo='translate-x-full'
            >
              <div
                className={`relative w-screen ${sizes[size]} z-[1000]  border border-gray-20 bg-white shadow-extra-large dark:border-dark-gray-30 dark:bg-dark-gray-10`}
              >
                <div className=' flex h-full flex-col overflow-y-auto  '>
                  <div
                    className={`relative  flex-1 ${
                      variant === 'with-padding' ? 'p-[1.6rem]' : 'p-0'
                    }  pb-[7.2rem]`}
                  >
                    {children}
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
