import { ViewOff, ViewOn } from '@/assets/icons';

interface PasswordWrapperProps {
  children: React.ReactNode;
  handleView: () => void;
  view: boolean;
}
export function PasswordWrapper(props: PasswordWrapperProps) {
  const { children, handleView, view } = props;
  return (
    <div className='relative w-full'>
      {children}
      <button
        className='absolute right-[3%] top-[30%] cursor-pointer'
        type='button'
        onClick={() => handleView()}
      >
        {view ? (
          <ViewOn className='text-gray-60 dark:text-dark-gray-70' />
        ) : (
          <ViewOff className='text-gray-60 dark:text-dark-gray-70' />
        )}
      </button>
    </div>
  );
}
