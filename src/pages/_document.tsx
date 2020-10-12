import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/shortcut_logo.ico" />
          <link rel="stylesheet" href="/css/nprogress.css" />
          <link rel="stylesheet" href="/css/antd.min.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css"></link>
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
