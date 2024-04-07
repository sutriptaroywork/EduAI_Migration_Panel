import { QandAEmptyIcon } from '@/assets/empty-icon';
import useAuthQuery from '@/hooks/use-auth-query';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { EmptyPage } from '@/ui/empty-page';
import { Fragment } from 'react';
import { Generating } from '../transitions/generating';
import { QuestionView } from './question-view';

interface QProps {
  assignedCode: any;
  qlevel: string;
}

export function QANDAView(props: QProps) {
  let { assignedCode, qlevel } = props;
  // if (!assignedCode) {
  //   assignedCode = localStorage.getItem('assignedCode');
  // }
  console.log('assigned_code qnada', assignedCode);
  const { data, isLoading } = useAuthQuery({
    url: SHIKSHA_BASE_URL + API_URL.QANDA + `/${assignedCode}` + `/${qlevel}`,
    queryKey: ['qanda', `${assignedCode}`, `${qlevel}`],
  });

  // useEffect(() => {
  //   console.log('q-data', data, qlevel);
  // }, [qlevel]);

  if (!assignedCode) {
    return (
      <EmptyPage
        icon={<QandAEmptyIcon />}
        description='Question will appear here once you upload a file and summarize it.'
        pageHeight=' max-h-[40rem] overflow-y-auto xl:max-h-[64rem] min-h-[32rem]'
      />
    );
  }
  return (
    <Fragment>
      {isLoading ? (
        <Generating />
      ) : (
        <>
          <QuestionView data={data} />
        </>
      )}
    </Fragment>
  );
}
