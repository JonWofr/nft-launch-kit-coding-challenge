import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=optional"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className="bg-gradient-to-b from-primaryBackgroundFrom to-primaryBackgroundTo bg-fixed">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
