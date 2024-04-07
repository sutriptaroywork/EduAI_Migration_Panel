import { QueryClient } from '@tanstack/react-query';
import router from 'next/router';

// const url = '/api/logout';

// const loginUrl = '/flow/login-with-midas';

const url =
  process.env.NODE_ENV === 'production'
    ? '/' + process.env.REVERSE_PROXY_BASE_URL + '/api/logout'
    : '/api/logout';

const loginUrl = '/flow/login';

const queryClient = new QueryClient();
export async function sessionLogout(
  onSuccess?: () => void,
  onFail?: () => void,
  queryClient?: QueryClient,
) {
  const httpRes: any = await fetch(url).then(res => res.json());
  if (httpRes.isLoggedIn === false) {
    localStorage.removeItem('ml_token');
    localStorage.removeItem('assignedCode');
    localStorage.removeItem('name');
    // queryClient.clear();
    // localStorage.removeItem('role');

    if (queryClient) {
      queryClient?.invalidateQueries();
    }
    if (onSuccess) {
      onSuccess();
    }

    router.push(loginUrl);
  }
  if (onFail) {
    onFail();
  }
}
