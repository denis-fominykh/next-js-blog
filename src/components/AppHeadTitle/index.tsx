import Head from 'next/head';

interface AppHeadTitleProps {
  title?: string;
}

export default function AppHeadTitle({
  title = 'Create Next App',
}: AppHeadTitleProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
