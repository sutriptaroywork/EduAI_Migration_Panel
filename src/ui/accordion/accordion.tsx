import { Chevron } from '@/assets/icons';
import { Disclosure } from '@headlessui/react';
import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { accordianStyle } from './style';

interface AccrodionProps extends VariantProps<typeof accordianStyle> {
  title: ReactNode;
  className?: string;
  iconPlacement?: 'left' | 'right';
  children?: ReactNode;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  defaultOpen?: boolean;
  iconColor?: string;
  label?: string;
  childrenVariant?: 'with-border' | 'width-bottom-border' | undefined;
}

export function Accordion({
  children,
  title,
  iconPlacement = 'right',
  style,
  isDisabled,
  iconColor,
  className,
  defaultOpen = false,
  variant,
  label = '',
  childrenVariant,
}: AccrodionProps) {
  // const classes = {
  //   size: {
  //     small: 'h-[3.2rem]',
  //     medium: 'h-[4rem]',
  //     large: 'h-[4.8rem]',
  //   },
  // };

  // if (isDisabled) {
  //   return (
  //     <div className='cursor-not-allowed bg-transparent ' style={style}>
  //       <Disclosure as='div' className='cursor-not-allowed'>
  //         {({ open }) => (
  //           <div>
  //             <Disclosure.Button
  //               className={`
  //               ${hasBorder ? 'border-gray-01 dark:border-gray-07 border-y-[1px] ' : null}
  //               ${
  //                 hasBorderTop
  //                   ? open
  //                     ? 'border-gray-01 dark:border-gray-07 border-y-[1px]'
  //                     : 'border-gray-01 dark:border-gray-07 border-t-[1px]'
  //                   : null
  //               }
  //               ${
  //                 hasBorderBottom
  //                   ? open
  //                     ? 'border-gray-01 dark:border-gray-07 border-y-[1px]'
  //                     : 'border-gray-01 dark:border-gray-07 border-b-[1px]'
  //                   : null
  //               }
  //               flex w-full items-center
  //               ${iconPlacement === 'left' ? 'justify-start' : 'justify-between '}

  //           text-gray-04 bg-transparent p-[1.6rem] text-left
  //           text-sm
  //           font-medium focus:outline-none  `}
  //             >
  //               <span className='text-base font-normal text-gray-10 dark:text-white'>{title}</span>
  //               <Chevron
  //                 width={16}
  //                 height={16}
  //                 className={`${
  //                   open ? 'rotate-180' : ''
  //                 }transition duration-5000 fill-gray-04 text-gray-04 h-10 w-10 ease-in dark:fill-white dark:text-white`}
  //               />
  //             </Disclosure.Button>
  //             <Disclosure.Panel className='text-gray-08 dark:text-gray-02 pl-4 pt-2 pb-4 text-base font-normal '>
  //               {children}
  //             </Disclosure.Panel>
  //           </div>
  //         )}
  //       </Disclosure>
  //     </div>
  //   );
  // }
  return (
    <div className={` w-full bg-transparent ${className}`} style={style}>
      <Disclosure as='div' className='' defaultOpen={defaultOpen}>
        {({ open }) => (
          <div
            className={`${
              open &&
              childrenVariant === 'width-bottom-border' &&
              'border-b-[1px] border-gray-20  shadow-extra-small dark:border-dark-gray-30'
            }
            ${
              open &&
              childrenVariant === 'with-border' &&
              'rounded-[4px] border border-gray-20 shadow-extra-small  dark:border-dark-gray-30'
            }
            `}
          >
            <Disclosure.Button
              // className={`
              // ${hasBorder ? 'border-gray-02 dark:border-gray-07  border-y-[1px]  ' : null}
              // ${
              //   hasBorderTop
              //     ? open
              //       ? 'border-gray-02 dark:border-gray-07 border-y-[1px]'
              //       : 'border-gray-02 dark:border-gray-07 border-t-[1px]'
              //     : null
              // }
              // ${
              //   hasBorderBottom
              //     ? open
              //       ? 'border-gray-02 dark:border-gray-07 border-y-[1px]'
              //       : 'border-gray-02 dark:border-gray-07 border-b-[1px]'
              //     : null
              // }

              // ${iconPlacement === 'left' ? 'justify-start gap-[1.9rem]' : 'justify-between '}
              // ${open ? 'bg-gray-01 dark:bg-gray-09' : null}
              // hover:bg-gray-01 focus:ring-blue-06 active:bg-gray-02
              // dark:hover:bg-gray-09 dark:active:bg-gray-08 flex w-full
              // items-center
              // rounded-[2px] bg-transparent
              // p-[1.6rem] text-left
              // text-sm font-medium
              // text-gray-10 focus-within:border-0 focus:outline-none
              // focus:ring-2 active:border-0
              // `}
              className={`justify-strat flex h-[4.8rem] w-full items-center gap-[.8rem] ${accordianStyle(
                {
                  variant,
                },
              )} ${open && 'bg-gray-10 shadow-none dark:bg-dark-gray-20'} ${
                open && childrenVariant === 'with-border' && 'rounded-b-[0px] border-0'
              }`}
            >
              <span
                className={`
              ${iconPlacement === 'left' ? 'order-2' : 'order-1 '}
               capitalize text-gray-60 text-med-body dark:text-dark-gray-70`}
              >
                {title}
              </span>

              <p
                className={`flex items-center gap-[.8rem] ${
                  iconPlacement === 'left' ? 'order-1' : 'order-2 '
                }`}
              >
                {label && (
                  <p className='rounded-[4px] bg-gray-10 px-[.8rem] py-[.3rem] text-gray-80 text-med-body-sm dark:bg-dark-gray-20 dark:text-dark-gray-80'>
                    {label}
                  </p>
                )}
                <Chevron
                  width={16}
                  height={16}
                  className={`${open ? 'rotate-180' : ''}
                ${iconColor ? iconColor : 'fill-gray-60  dark:fill-dark-gray-70 '}
                duration-5000   transition ease-in `}
                />
              </p>
            </Disclosure.Button>
            <Disclosure.Panel
              className={` p-[1.6rem] text-gray-60 text-reg-body dark:text-dark-gray-70`}
            >
              {children}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
