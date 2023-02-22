import '@/styles/globals.css'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayour = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayour) {

  const getLayout = Component.getLayout || ((page: any) => page);

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
    
  // )

  return getLayout( <Component {...pageProps} />)
}
