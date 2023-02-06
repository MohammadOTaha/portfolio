import TerminalPage from './terminal';
import Head from 'next/head';

export default function Home() {
  return <>
    <Head>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <title>Omar's Portfolio</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <TerminalPage />
  </>
};