const isProd = process.env.NODE_ENV === 'production';

export const pathWithProxy = (path: string) => {
  return isProd ? '/' + process.env.REVERSE_PROXY_BASE_URL + path : path;
};
