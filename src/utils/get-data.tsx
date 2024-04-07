/* eslint-disable no-console */
// import { getSession } from 'next-auth/react';
import { toast } from 'react-toastify';

interface Props<T> {
  url: string;
  showToast?: boolean;
  toastMessage?: string;
}

export async function getData<T>(props: Props<T>): Promise<T> {
  const { url, showToast = false, toastMessage } = props;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('ml_token') ?? '',
      // 'x-organization-id': localStorage.getItem('organization_code') ?? '',
    },
  })
    .then(response => {
      console.log('response', response);
      if (response.status === 200) {
        if (showToast) {
          toastMessage ? toastMessage : toast.success('Data fetched successfully');
        }
        return response.json() as T;
      }
      if (response.status === 401) {
        if (showToast) {
          throw new Error('Not Authorized');
          // toast.error('You are not authorized to perform this action');
        }

        console.error(response);
      }
      if (response.status === 403) {
        // router.push('/forbidden');
        if (showToast) {
          throw new Error('Not Authorized');
          // toast.error('You are not authorized to perform this action');
        }

        console.error(response);
      }
      if (response.status === 400) {
        if (showToast) {
          throw new Error('Server Error');
          // toast.error(`Data entered is invalid or a required field is missing ${response.text}`);
        }
      }
      // return response.json() as T;
      // throw new Error('Not Authorized');
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      //throw new Error(error);
      //console.log(error);
      // toast.error(`Operation failed ${error}`);
    });
  // console.log('fullResponse', res);
  return res as Promise<T>;
}
