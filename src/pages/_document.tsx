/* eslint-disable no-undef */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { NavBar } from '../components/Home/NavBar';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="favicon.ico" />
        </Head>

        <body className="container mx-auto mt-3 min-w-[350px]">
          <NavBar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
