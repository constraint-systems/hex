import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.png" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="A keyboard-driven, grid-based drawing tool."
          />
          <meta property="og:title" content="Hex" />
          <meta
            property="og:description"
            content="A keyboard-driven, grid-based drawing tool."
          />
          <meta
            property="og:image"
            content="https://hex.constraint.systems/static/share.png"
          />
          <meta property="og:url" content="https://hex.constraint.systems" />
          <meta name="twitter:card" content="summary_large_image" />
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
