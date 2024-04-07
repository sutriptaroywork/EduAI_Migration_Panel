import { VariantProps } from 'class-variance-authority';
import { badgeStyles } from './badgeStyles';

interface Props extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeStyles> {
  children: React.ReactNode;
  hideZero?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

export function Badge(props: Props) {
  const {
    children,
    isRounded = true,
    size = 'sm',
    variant = 'neutral',
    className = '',
    hideZero = true,
    showIcon = false,
    icon,
    ...rest
  } = props;

  if (children === undefined || children === null) return null;
  if (!children && !hideZero) return null;
  return (
    <span
      {...rest}
      className={`
        ${showIcon === true ? 'flex items-center justify-center' : 'inline-block'} ${badgeStyles({
        isRounded,
        size,
        variant,
        className,
      })}`}
    >
      {showIcon && icon} {children}
    </span>
  );
}
