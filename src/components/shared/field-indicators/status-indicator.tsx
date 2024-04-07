import { getFormattedClassName } from '@/utils/get-formatted-class';
import Tippy from '@tippyjs/react';
import { SVGProps } from 'react';

type Props = {
  status: 'success-blue' | 'success' | 'error' | 'warning' | 'info' | 'help' | 'red';
  size?: number;
  className?: string;
  isCustom?: boolean;
  showTooltip?: boolean;
  tooltipContent?: string;
};

export function StatusIndicator({
  status,
  size = 16,
  className = '',
  isCustom = false,
  showTooltip = false,
  tooltipContent = '',
}: Props) {
  switch (status) {
    case 'success':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <CheckFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-green-60 dark:text-green-50',
              ])}
            />
          </span>
        </Tippy>
      );
    case 'success-blue':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <CheckFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-primary-60 dark:text-primary-50',
              ])}
            />
          </span>
        </Tippy>
      );
    case 'error':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <ErrorFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-red-60 dark:text-red-50',
              ])}
            />
          </span>
        </Tippy>
      );
    case 'red':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <ErrorFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-red-70 dark:text-red-10',
              ])}
            />
          </span>
        </Tippy>
      );

    case 'warning':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <WarningFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-orange-60 dark:text-orange-50',
              ])}
            />
          </span>
        </Tippy>
      );
    case 'info':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <InfoFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-primary-60 dark:text-primary-50',
              ])}
            />
          </span>
        </Tippy>
      );
    case 'help':
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <HelpFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-gray-40 dark:text-dark-gray-50',
              ])}
            />
          </span>
        </Tippy>
      );
    default:
      return (
        <Tippy
          disabled={!showTooltip}
          content={tooltipContent}
          placement='auto'
          arrow={false}
          className='tippy'
        >
          <span>
            <HelpFilled
              width={size}
              height={size}
              className={getFormattedClassName([
                className,
                isCustom ? '' : 'text-gray-40 dark:text-dark-gray-50',
              ])}
            />
          </span>
        </Tippy>
      );
  }
}

const CheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-1 9.795-2.5-2.5.795-.795L7 9.205 10.705 5.5l.798.793L7 10.795Z'
        fill='currentColor'
      />
    </g>
  </svg>
);
const ErrorFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M8 1a6.957 6.957 0 0 0-7 7 6.957 6.957 0 0 0 7 7 6.958 6.958 0 0 0 7-7 6.956 6.956 0 0 0-7-7Zm2.723 10.5L4.5 5.278l.778-.778 6.222 6.222-.777.778Z'
        fill='currentColor'
      />
    </g>
  </svg>
);

export const InfoFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 3a.75.75 0 1 1 0 1.5A.75.75 0 0 1 8 4Zm2 8.063H6v-1.126h1.438V8.063H6.5V6.937h2.063v4H10v1.126Z'
        fill='currentColor'
      />
    </g>
  </svg>
);

const HelpFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 11.5A.75.75 0 1 1 8 11a.75.75 0 0 1 0 1.5Zm.571-3.877v1.25H7.446V7.5H8.51a1.188 1.188 0 1 0 0-2.376h-.75A1.189 1.189 0 0 0 6.57 6.31v.319H5.446v-.319A2.314 2.314 0 0 1 7.76 4h.75a2.312 2.312 0 0 1 .062 4.623Z'
      fill='currentColor'
    />
  </svg>
);

const WarningFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 16 16'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        d='M8 1C4.15 1 1 4.15 1 8s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7Zm-.55 3h1.1v5.5h-1.1V4ZM8 12.5c-.4 0-.75-.35-.75-.75S7.6 11 8 11s.75.35.75.75-.35.75-.75.75Z'
        fill='currentColor'
      />
    </g>
  </svg>
);
