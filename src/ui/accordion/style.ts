import { cva } from 'class-variance-authority';

export const accordianStyle = cva(
  'shadow-extra-small p-[1.6rem] hover:bg-gray-05 dark:hover:bg-dark-gray-10 foucs:outline-none focus-visible:outline-none focus:border-none focus-visible:ring-[2px] focus-visible:ring-primary-60 dark:focus-visible:ring-primary-50 active:ring-primary-70 dark:active:ring-primary-60 active:ring-[2px] focus:ring-primary-60 ',
  {
    variants: {
      variant: {
        'border-with-rounded': 'border border-gray-20 dark:border-dark-gray-30 rounded-[4px]',
        'without-rounded': 'border border-gray-20 dark:border-dark-gray-30',
        hasbottomBorder: 'border-b-[1px] border-gray-20 dark:border-dark-gray-30',
        'bottomBorder-with-rounded':
          'rounded-[4px] border-b-[1px] border-gray-20 dark:border-dark-gray-30',
      },
    },
    defaultVariants: {
      variant: 'border-with-rounded',
    },
  },
);

export const accordianContainerStyle = cva('', {
  variants: {
    variant: {
      'with-border':
        'rounded-[4px] border border-gray-20 shadow-extra-small  dark:border-dark-gray-30',
      'with-bottom-border':
        'border-b-[1px] border-gray-20 dark:border-dark-gray-30 shadow-extra-small',
      'without-border': 'border-0',
    },
  },
  defaultVariants: {
    variant: 'without-border',
  },
});
