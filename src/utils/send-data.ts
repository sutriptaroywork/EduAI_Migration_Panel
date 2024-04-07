/* eslint-disable no-console */

import { toast } from 'react-toastify';
interface SendDataProps {
  url: string;
  body?: any;
  toastMessage?: string;
  method?: 'POST' | 'PUT' | 'DELETE';
  operation?: 'Add' | 'Update' | 'delete';
  showToast?: boolean;
  headers?: any;
  page?:
    | 'Servers'
    | 'Brokers'
    | 'Organizations'
    | 'Startegies'
    | 'Systems'
    | 'Portfolios'
    | 'Invoices'
    | 'Clients'
    | 'Distributors'
    | 'QMS';
  responseWaitTimeMs?: number;
}
const operationNotificationString = {
  Add: 'Created successfully',
  Update: 'Updated successfully',
  delete: 'Deleted successfully',
};
export const sendData = async (props: SendDataProps) => {
  const {
    url,
    body,
    method = 'PUT',
    operation = 'Update',
    toastMessage,
    showToast = true,
    headers,
    responseWaitTimeMs = 1000 * 60 * 2, // 2 minutes
  } = props;
  const session = {
    userToken: 'token',
    organization_code: 'code',
  };

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('ml_token') ?? '',
    // 'x-organization-id': localStorage.getItem('organization_code') ?? '',
    ...headers,
  });

  // const controller = new AbortController();
  // const timer = setTimeout(() => controller.abort(), responseWaitTimeMs);

  let responseData = await fetch(url, {
    method: method,
    headers: myHeaders,
    body: JSON.stringify(body),
    // signal: controller.signal,
  })
    .then(response => {
      if (response.status === 200) {
        if (showToast) {
          toastMessage ? toastMessage : toast.success(operationNotificationString[operation]);
        }
      }
      if (response.status === 403) {
        if (showToast) {
          toast.error('You are not authorized to perform this action');
        }
        console.error(response);
      }
      if (response.status === 400) {
        if (showToast) {
          toast.error(`Data entered is invalid or a required field is missing ${response.text}`);
        }
      }
      if (response.status === 409) {
        if (showToast) {
          toast.error(` User already exist `);
        }
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(error);
      // toast.error(`Operation failed ${error}`);
    });
  // clearTimeout(timer);

  return responseData;
};
