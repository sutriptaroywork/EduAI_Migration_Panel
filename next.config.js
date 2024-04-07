/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const customCookie = [
  {
    type: 'cookie',
    key: isProd ? 'iron-session/shiksha_ml/next.js' : 'iron-session/shiksha_ml/next.js',
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'https://mfsquantanalytics.com'],
  },
  env: {
    REVERSE_PROXY_BASE_URL: process.env.REVERSE_PROXY_BASE_URL,
  },
  basePath: isProd ? `/${process.env.REVERSE_PROXY_BASE_URL}` : '',
  assetPrefix: isProd ? `/${process.env.REVERSE_PROXY_BASE_URL}/` : '',
  distDir: isProd ? `/${process.env.DIST_DIR}` : '.next',
  async redirects() {
    return [
      {
        source: '/flow',
        permanent: false,
        destination: '/flow/login',
      },
      {
        source: '/flow',
        has: [...customCookie],
        permanent: false,
        destination: '/',
      },
      {
        source: '/flow/login',
        has: [...customCookie],
        permanent: false,
        destination: '/',
      },
      // {
      //   source: '/clients',
      //   destination: '/clients',
      //   has: [...customCookie],
      //   permanent: false,
      // },
      // {
      //   source: '/dealers',
      //   destination: '/dealers',
      //   has: [...customCookie],
      //   permanent: false,
      // },
      // {
      //   source: '/pre-trade-mail',
      //   destination: '/pre-trade-mail',
      //   has: [...customCookie],
      //   permanent: false,
      // },
      // {
      //   source: '/post-trade-mail',
      //   destination: '/post-trade-mail',
      //   has: [...customCookie],
      //   permanent: false,
      // },
    ];
  },
};

module.exports = nextConfig;
