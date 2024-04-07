import { pathWithProxy } from '@/utils/path-with-proxy';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        <meta property='og:locale' content='en_IN' />
        <meta property='og:url' content='https://mfsquantanalytics.com/secure_send_app' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Shiksha-ml' />
        <meta property='og:description' content='' />
        <meta property='og:title' content='Shiksha-ml' />

        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href={`${pathWithProxy('/static/edudotai-icon-2.png')}`}
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={`${pathWithProxy('/static/edudotai-icon-2.png')}`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={pathWithProxy('/static/edudotai-icon-2.png')}
        />
        <link rel='manifest' href='/static/manifest.json' />
        <meta name='msapplication-TileColor' content='#9362F3' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#9362F3'></meta>
      </Head>
      {/* <body className='no-scrollbar'> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
