import { cva } from 'class-variance-authority';

export const badgeStyles = cva('font-medium gap-[.8rem] text-center', {
  variants: {
    size: {
      sm: 'text-body-02 px-[1.2rem] py-[0.6rem]',
      md: 'text-med-body-sm px-[0.8rem] py-[0.5rem]',
      lg: 'text-med-body px-[0.8rem] py-[0.5rem]',
      xs: 'text-med-body-sm px-[.6rem] py-[.3rem]',
    },
    variant: {
      // neutral: ' text-gray-80 bg-gray-10 dark:text-dark-gray-80 dark:bg-dark-gray-20',
      info: ' dark:text-primary-10 text-primary-60 bg-primary-10 dark:bg-primary-90',
      // danger: ' dark:text-red-10 text-red-60 bg-red-10 dark:bg-red-100',
      // success: ' dark:text-green-10 text-green-60 bg-green-10 dark:bg-green-100',
      // warning: ' dark:text-orange-10 text-orange-80 bg-orange-10 dark:bg-orange-100',
      // cyan: 'text-cyan-80 bg-cyan-10 dark:bg-cyan-100 dark:text-cyan-10',
      // purple: 'text-purple-80 bg-purple-10 dark:bg-purple-100 dark:text-purple-10',
      // custom: '',
      neutral: ' text-gray-60 bg-gray-10',
      danger: '  text-red-60 bg-red-05 ',
      success: '  text-green-60 bg-green-05 ',
      warning: '  text-orange-70 bg-orange-05',
      // cyan: 'text-cyan-80 bg-cyan-10 dark:bg-cyan-100 dark:text-cyan-10',
      purple: 'text-purple-50 bg-purple-05 ',
      custom: '',
    },
    isRounded: {
      true: 'rounded-[.8rem]',
      false: 'rounded',
    },
  },
});
