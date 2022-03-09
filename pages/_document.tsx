// @NOTE: SSR에서도 styled-component 가능

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="title" content="땅콩스쿨, 가장 가까운 문해력 유치원" />
          <meta
            name="description"
            content="3만원으로 즐기는 매달 새로운 32권의 독서 커리큘럼. 평일 4~9시 캐릭터 선생님과 실시간 랜선라이브에 참여하세요!"
          ></meta>
          <meta property="og:title" content="땅콩스쿨"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
