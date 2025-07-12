import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        {/* Viewport meta tag should NOT be here - move it to _app.js */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}