import '@/styles/generating.css';
import '@/styles/globals.css';
import '@/styles/primary-btn.css';
import '@/styles/radix.css';
import '@/styles/star.css';
import '@/styles/summary.css';
import '@/styles/text-gradient.css';
import '@/styles/tippy.css';
import '@/styles/upload.css';
import 'react-toastify/dist/ReactToastify.css';
import 'tippy.js/dist/border.css';
import '../styles/react-toastify.css';

import { CheckmarkFilled, Close, InfoFilled } from '@/assets/icons';
import { Layout } from '@/components/layout/auth-flow/LayoutWrapper';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import router from 'next/router';
import { useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // setRender(state => !state);
  //   getHelpers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const { setHelpers } = useHelperStore();
  // async function getHelpers() {
  //   const res = await sendData({
  //     url: SS_BASE_URL + '/helpers',
  //     method: 'POST',
  //     operation: 'Update',
  //     showToast: false,
  //     body: {
  //       plugins: ['pre_trade', 'post_trade'],
  //     },
  //   });
  //   setHelpers(res);
  // }

  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 180000,
            // // staleTime: 300000,
            staleTime: Infinity,
            refetchOnReconnect: true,
            keepPreviousData: true,
            refetchInterval: Infinity, //1000 * 60 * 10, // 10 minutes
            suspense: false,
            onError: error => {
              // eslint-disable-next-line no-console
              console.error('Account unauthorized', error);
              router.push('/flow/login');
            },
          },
        },
      }),
  );
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <QueryClientProvider client={queryClient}>
        {/* <QueryClientProvider client={queryClientRef.current}> */}
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position='bottom-right'
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              draggable={false}
              closeOnClick
              pauseOnHover
              theme={'colored'}
              icon={({ type }) => {
                if (type === 'success') {
                  return <CheckmarkFilled className='h-[1.6rem] w-[1.6rem]' />;
                }
                return <InfoFilled className={`h-[1.6rem] w-[1.6rem]`} />;
              }}
              closeButton={() => (
                <Close className={` absolute right-[1.6rem] top-[35%] h-[1.6rem] w-[1.6rem]`} />
              )}
            />
          </Layout>
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
