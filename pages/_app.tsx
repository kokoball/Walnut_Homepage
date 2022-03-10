import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import { theme } from 'styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta name="title" content="땅콩스쿨, 가장 가까운 문해력 유치원" />
        <meta
          name="description"
          content="3만원으로 즐기는 매달 새로운 32권의 독서 커리큘럼. 평일 4~9시 캐릭터 선생님과 실시간 랜선라이브에 참여하세요!"
        ></meta>
        <meta property="og:title" content="땅콩스쿨"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>땅콩스쿨</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
