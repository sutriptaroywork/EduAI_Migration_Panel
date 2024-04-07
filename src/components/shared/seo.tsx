import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO(props: SEOProps) {
  const { title = 'ShikshaML', description } = props;
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='theme-color' content='#0F62FE' />
      <meta name='google' content='nositelinkssearchbox' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='robots' content='noindex' />

      <meta property='og:locale' content='en_IN' />
      <meta property='og:url' content='https://mfsquantanalytics.com/secure_send_app' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='SecureSend' />
      <meta property='og:description' content='' />
      <meta property='og:title' content='SecureSend' />
    </Head>
  );
}
