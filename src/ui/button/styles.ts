import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'appearance-none  font-medium gap-2 focus:outline-none focus-visible:outline-none outline-none  rounded-[.8rem] focus-visible:shadow-primary-small transition-colors duration-200 ease-in-out h-max disabled:select-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        filled: [
          'bg-primary-50 border border-primary-60 hover:bg-primary-50 ',
          'hover:bg-primary-50 hover:shadow-primary active:bg-primary-60 active:shadow-primary-small',
          'text-white ',
          '  disabled:bg-primary-10 disabled:text-white disabled:hover:shadow-none disabled:border-none',
        ],
        outline: [
          'bg-transparent hover:bg-primary-10 text-primary-60 active:bg-primary-20 ',
          'border border-primary-60  focus-visible:border-none ',
          'dark:hover:bg-primary-100 dark:text-primary-50 dark:active:bg-primary-90 dark:border-primary-50',
          'disabled:text-gray-40  disabled:border-gray-20',
          'dark:disabled:text-dark-gray-50 dark:disabled:hover:bg-transparent dark:disabled:border-dark-gray-30',
        ],
        'red-outline': [
          'bg-transparent hover:bg-red-10 text-red-60 active:bg-red-10 ',
          'border border-red-60  focus-visible:border-none ',
          'dark:hover:bg-red-100 dark:text-red-40 dark:active:bg-red-100 dark:border-red-40',
          'disabled:text-gray-40  disabled:border-gray-20',
          'dark:disabled:text-dark-gray-50 dark:disabled:hover:bg-transparent dark:disabled:border-dark-gray-30',
        ],
        'outline-light': [
          'bg-white border border-gray-30 text-gray-60 hover:shadow-primary active:shadow-primary-small',
          'disabled:bg-gray-10 disabled:text-gray-40 disabled:shadow-none',
          // 'shadow-extra-small',
          // 'bg-transparent hover:bg-gray-10 text-gray-60 dark:text-dark-gray-70 active:bg-gray-30 ',
          // ' dark:hover:bg-dark-gray-20  dark:active:bg-dark-gray-30 dark:border-dark-gray-30',
          // 'border border-gray-30  focus-visible:border-none ',
          // 'disabled:bg-transparent disabled:text-gray-40 disabled:border-gray-20',
          // 'dark:disabled:text-dark-gray-50 dark:disabled:hover:bg-transparent dark:disabled:border-dark-gray-30',
        ],
        'fill-outline-light': [
          'shadow-extra-small',
          'bg-white hover:bg-gray-10 text-gray-60 active:bg-gray-30 ',
          'dark:bg-dark-gray-05 dark:hover:bg-dark-gray-10 dark:text-dark-gray-70 active:bg-dark-gray-30 ',
          'border border-gray-30 dark:border-dark-gray-30 focus-visible:border-none ',
          'disabled:bg-transparent disabled:text-gray-40 disabled:border-gray-20',
        ],
        'fill-outline-red': [
          'shadow-extra-small',
          'bg-white dark:bg-dark-gray-05 hover:bg-gray-10 text-red-60 active:bg-gray-30 ',
          'border border-gray-30 dark:border-dark-gray-40 focus-visible:border-none ',
          'disabled:bg-transparent disabled:text-gray-40 disabled:border-gray-20',
        ],
        ghost: [
          'bg-transparent hover:bg-gray-10 hover:shadow-primary active:shadow-primary-small focus-visible:shadow-primary-small focus-visible:bg-gray-20 active:bg-gray-20 text-gray-60 ',
          'disabled:bg-transparent disabled:text-gray-40 disabled:shadow-none',
        ],
        'ghost-gray': [
          'bg-transparent hover:bg-[rgba(28, 34, 43,0.32)] hover:shadow-primary active:shadow-primary-small focus-visible:shadow-primary-small focus-visible:bg-[rgba(28, 34, 43,0.32)] active:bg-[rgba(28, 34, 43,0.32)] text-white ',
          'disabled:bg-transparent disabled:text-gray-40 disabled:shadow-none',
        ],
        'ghost-light': [
          'bg-transparent hover:bg-gray-10  active:bg-gray-20 text-gray-60 ',
          // 'dark:hover:bg-dark-gray-20 dark:active:bg-dark-gray-30 dark:text-dark-gray-70',
          'disabled:bg-transparent disabled:text-gray-40',
          'dark:disabled:text-dark-gray-50 ',
        ],
        danger: [
          'bg-red-60 hover:bg-red-50 active:bg-red-70 text-white',
          'dark:bg-red-50 dark:hover:bg-red-60 dark:active:bg-red-70',
          'disabled:bg-gray-20 disabled:text-gray-40',
          'dark:disabled:bg-dark-gray-30 dark:disabled:text-dark-gray-50',
        ],
        text: ['text-primary-50 hover:text-primary-60 ', 'disabled:text-gray-40'],
        'text-white': ['text-white hover:text-primary-60 ', 'disabled:text-gray-40'],
        custom: [''],
      },
      size: {
        xs: ['text-body-02', 'px-[.8rem]'],
        small: ['text-body-02', 'py-[1.4rem] px-[.8rem]'],
        medium: ['text-body-02', 'py-[1rem] px-[1.2rem]'],
        large: ['text-body-02', 'py-[1.4rem] px-[1.6rem]'],
      },
      onlyIcon: {
        true: 'w-max',
        false: 'w-full',
      },
    },
    compoundVariants: [
      { size: 'small', onlyIcon: true, className: '!p-2' },
      { size: 'medium', onlyIcon: true, className: '!p-3' },
      { size: 'large', onlyIcon: true, className: '!p-4' },
    ],
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
    },
  },
);
