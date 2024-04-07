import { getData } from '@/utils/get-data';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

interface Props<T> {
  url: string;
  queryKey: string[];
  customQueryFunction?: () => Promise<any> | Promise<never>;
  showToast?: boolean;
  toastMessage?: string;
}

export default function useAuthQuery<T>(props: Props<T>) {
  const { url, queryKey, showToast, toastMessage } = props;
  const router = useRouter();
  const result = useQuery({
    queryKey,
    queryFn: () => {
      return getData<T>({
        url: url,
        showToast: showToast,
        toastMessage: toastMessage,
      });
    },
  });

  const errorStatus = result?.error;
  // console.log('result', result);
  // if (errorStatus === null) {
  //   router.push('/forbidden');
  // }
  if (errorStatus === 'Not Authorized') {
    router.push('/flow/login-with-midas');
  }

  // else if (errorStatus === 'Server Error') {
  //   router.push('/flow/forbidde n');
  // }
  return result;
}
