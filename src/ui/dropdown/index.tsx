import { Caret } from '@/assets/icons';
import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';

interface AccrodionProps {
  title: ReactNode;
  description: ReactNode;
  index: number;
}

export function Dropdown({ title, description, index }: AccrodionProps) {
  // const styleOnCurrentPage =
  //   (index === 2 && pathname.startsWith('/partners')) ||
  //   (index === 0 && pathname.startsWith('/internal')) ||
  //   (index === 1 && pathname.startsWith('/crm'))
  //     ? 'text-primary-60 hover:text-primary-60  text-med-body bg-gray-10 dark:bg-dark-gray-20 dark:text-primary-50 dark:hover:!text-primary-50 [&>p]:text-med-body'
  //     : null;
  return (
    <div className=' w-full bg-transparent '>
      <Disclosure as='div'>
        {({ open }) => (
          <div>
            <Disclosure.Button
              className={`${
                !open && ''
              } focus:outline-blue-06 relative flex h-[4rem] w-full items-center justify-between rounded-[.2rem] px-[1.6rem] py-[1rem] text-gray-60 hover:bg-gray-10 hover:text-gray-80 dark:text-dark-gray-70 dark:hover:bg-dark-gray-20 dark:hover:text-dark-gray-90
             
              `}
            >
              <p className='text-reg-body'>{title}</p>
              <Caret
                width={16}
                height={16}
                className={`${
                  open ? 'rotate-90' : ''
                } duration-5000 fill-gray-06  dark:fill-gray-04 transition ease-in dark:text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className='dark:text-gray-02 pb-2 text-gray-60 text-reg-body dark:text-dark-gray-70'>
              {description}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}
