import useAuthQuery from '@/hooks/use-auth-query';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { Fragment } from 'react';
import { QuestionView } from '../q-and-a/question-view';
import { Generating } from '../transitions/generating';

// interface JProps {
//   iqData: any
// }
export function IQ() {
  

  // if (!assignedCode) {
  //   assignedCode = localStorage.getItem('assignedCode') || '';
  // }

  const { data, isLoading } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.IQ,
    queryKey: ['iq'],
  });

  
  return (
    <Fragment>
      {!data ? (
        <Generating description='Generating IQ questions'/>
      ) : (
        <>
          <QuestionView data={data} emptyText='No iq found' />
        </>
      )}
    </Fragment>
  );
}


