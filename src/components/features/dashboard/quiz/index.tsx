import useAuthQuery from '@/hooks/use-auth-query';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { Fragment } from 'react';
import { QuestionView } from '../q-and-a/question-view';
import { Generating } from '../transitions/generating';



export function Quiz() {
  
  // if (!assignedCode) {
  //   assignedCode = localStorage.getItem('assignedCode');
  // }
  const { data, isLoading } = useAuthQuery({
    url: SHIKSHA_BASE_URL + API_URL.QUIZ,
    queryKey: ['quiz'],
  });

  // console.log('riddle', data);

  return (
    <Fragment>
      {isLoading ? (
        <Generating description='Generating quiz questions'/>
      ) : (
        <>
          <QuestionView data={data} emptyText='No quiz found' />
        </>
      )}
    </Fragment>
  );
}
