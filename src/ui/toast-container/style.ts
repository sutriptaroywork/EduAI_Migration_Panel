import { cva } from 'class-variance-authority';

export const ToastStyles = cva('w-full rounded-[.8rem] p-[1.6rem]', {
  variants: {
    variant: {
      default: ['bg-white dark:bg-dark-gray-10', ' text-gray-100 dark:text-white'],
      blue: ['bg-primary-60  ', ' text-white'],
      green: ['bg-green-60 ', ' text-white'],
      orange: ['bg-orange-60', ' text-gray-100'],
      red: ['bg-red-60', 'text-white'],
    },
    size: {
      small: ['text-sub-02'],
      large: ['text-sub-01'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'small',
  },
});
