import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gradient-to-b from-primaryBackgroundFrom to-primaryBackgroundTo bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
