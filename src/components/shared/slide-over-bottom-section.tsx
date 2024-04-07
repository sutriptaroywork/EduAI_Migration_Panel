import { Button } from '@/ui';
import { DateFormatter } from '@/utils/date-formatter';
import { ReactNode } from 'react';

interface SBProps {
  handleSave: () => void;
  handleCancel: () => void;
  updatedDate: string | Date;
  createdDate: string | Date;
  custumFooterStyle?: string;
  isDisabled?: boolean;
  showButton?: boolean;
}
export function SlideoverBottomSection(props: SBProps) {
  const {
    handleSave,
    handleCancel,
    createdDate = new Date(),
    updatedDate = new Date(),
    isDisabled = false,
    showButton = true,
  } = props;
  return (
    <div
      className={`fixed inset-x-0 bottom-0 flex h-[7.2rem] w-full items-center justify-between rounded-b-[.8rem] border-t border-gray-20 bg-gray-05 p-[1.6rem] dark:border-dark-gray-30 dark:bg-dark-gray-05 `}
    >
      {showButton ? (
        <div className=' flex items-center justify-start gap-[.8rem]'>
          <Button
            type='submit'
            className='px-[1.6rem] py-[1rem]'
            onClick={handleSave}
            disabled={isDisabled}
          >
            Save
          </Button>
          <Button
            size='large'
            variant={'outline-light'}
            type='button'
            className=' py-[1rem] px-[1.6rem]  text-reg-body-sm'
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div></div>
      )}

      <div className='flex flex-col justify-center gap-[2px]'>
        <SlideOverDate>
          Last updated on: <DateFormatter date={updatedDate} />
        </SlideOverDate>
        <SlideOverDate>
          Created on: <DateFormatter date={createdDate} />
        </SlideOverDate>
      </div>
    </div>
  );
}
interface SlideOverDateProp {
  children: ReactNode;
}
function SlideOverDate(props: SlideOverDateProp) {
  const { children } = props;
  return (
    <p className='text-right text-gray-40 text-reg-body-sm dark:text-dark-gray-50'>{children}</p>
  );
}
