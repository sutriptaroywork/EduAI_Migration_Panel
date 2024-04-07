import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef, Ref, SVGProps } from 'react';
import { buttonStyles } from './styles';

export type ButtonProps<Tag extends keyof JSX.IntrinsicElements> =
  ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonStyles> & {
      as?: Tag;
      isLoading?: boolean;
      onlyIcon?: boolean;
      size?: 'small' | 'medium' | 'large' | 'xs';
    };

export function _Button<Tag extends keyof JSX.IntrinsicElements = 'button'>(
  props: ButtonProps<Tag>,
  ref: Ref<HTMLButtonElement>,
) {
  const {
    variant,
    as = 'button',
    size = 'medium',
    className,
    children,
    onlyIcon = false,
    isLoading = false,
    ...rest
  } = props;

  const Component = as as any;

  return (
    <Component
      ref={ref}
      className={buttonStyles({ variant, size, onlyIcon, className })}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <p className='flex items-center justify-start gap-2'>
          <Spinner className='h-5 w-5 animate-spin' />
          <span className=''>Loading</span>
        </p>
      ) : (
        children
      )}
    </Component>
  );
}

export const Button = forwardRef(_Button);

Button.displayName = '@midas/Button';

function Spinner(props: SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props;
  return (
    <svg
      viewBox='0 0 1792 1792'
      fill={'currentColor'}
      xmlns='http://www.w3.org/2000/svg'
      className={`${className} flex-no-shrink animate-spin`}
      {...rest}
    >
      <path d='M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z' />
    </svg>
  );
}
