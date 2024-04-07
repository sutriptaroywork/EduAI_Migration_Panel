import useAuthQuery from '@/hooks/use-auth-query';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { Fragment, ReactNode } from 'react';
import { QuestionView } from '../q-and-a/question-view';
import { Generating } from '../transitions/generating';


export function CurrentAffairs() {
  

  // if (!assignedCode) {
  //   assignedCode = localStorage.getItem('assignedCode') || '';
  // }

  const { data, isLoading } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.CURRENTAFFAIRS,
    queryKey: ['currentAffair'],
  });

  return (
    <Fragment>
      {!data ? (
        <Generating description='Generating Current Affair questions'/>
      ) : (
        <>
          <QuestionView data={data} emptyText='No cr found' />
        </>
      )}
    </Fragment>
  );
}

export const TextCard = (props: {
  children: ReactNode;
  variant?: 'with-hover' | 'without-hover';
  className?: string;
}) => {
  const { children, variant = 'with-hover', className = '' } = props;
  return (
    <div
      className={`group mb-[.8rem] flex h-full w-full items-start  gap-[.8rem] rounded-[.4rem] bg-gray-10 ${
        variant === 'with-hover' ? 'hover:bg-gray-20' : ''
      } p-[1.6rem] text-gray-80 text-body-02 ${className} `}
    >
      {children}
    </div>
  );
};
