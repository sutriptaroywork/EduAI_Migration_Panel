import { Check, ThreeDots } from '@/assets/icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface Props {
  dataItems: {
    label: string;
    onClick?: () => void;
    className?: string;
    href?: string;
    checked?: boolean;
  }[];
  size?: 'small' | 'medium' | 'large';
  tooltip?: string;
  triggerClassName?: string;
  isRotate?: boolean;
}

export const OverflowMenu = (props: Props) => {
  const {
    size = 'small',
    tooltip = 'Open overflow menu',
    dataItems,
    triggerClassName,
    isRotate = true,
  } = props;

  const sizes = {
    small: ` h-[3.2rem]  px-[0.8rem]`,
    medium: `h-[4rem]   px-[1.2rem]`,
    large: `h-[4.8rem]  px-[1.6rem]`,
  };

  return (
    <div className='relative z-[100] inline-block text-left'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            title={tooltip}
            className={`rounded-[4px] border border-gray-20 bg-white shadow-extra-small outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-primary-60 focus-visible:ring-offset-1  active:ring-[2px] active:ring-primary-70 dark:border-dark-gray-30 dark:bg-dark-gray-10 dark:active:ring-primary-60 ${sizes[size]} ${triggerClassName} `}
          >
            <ThreeDots
              width={16}
              height={16}
              aria-hidden='true'
              className={`${isRotate && 'rotate-90'} fill-gray-60 dark:fill-dark-gray-70 `}
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align='end'
            sideOffset={5}
            className={`relative z-[1000] w-[19rem]  rounded-[4px] border border-gray-20 bg-white shadow-medium  dark:border-dark-gray-30 dark:bg-dark-gray-10`}
          >
            {dataItems.map((item, i) => {
              const Component = item.href ? 'a' : 'button';
              return (
                <DropdownMenu.Item
                  key={`${item.label}-${i}`}
                  // asChild={true}
                >
                  <Component
                    onClick={item?.onClick}
                    className={` w-full border-none px-[1.2rem] py-[1.4rem] text-left  text-gray-60 outline-none text-reg-body hover:rounded-[4px] hover:bg-gray-05 hover:text-gray-80 dark:text-dark-gray-70 dark:hover:bg-dark-gray-20 dark:hover:text-dark-gray-80 data-[highlighted]:dark:text-dark-gray-80 ${item?.className}`}
                    href={item.href && item.href}
                  >
                    {item.label}
                    <Check
                      width={16}
                      height={16}
                      className={`${
                        item?.checked ? 'block text-primary-60 dark:text-primary-50 ' : 'hidden'
                      }`}
                    />
                  </Component>
                </DropdownMenu.Item>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
