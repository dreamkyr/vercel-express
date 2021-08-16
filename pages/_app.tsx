import React from 'react';
import Head from 'next/head';
import App from 'next/app';

import '../styles/tailwind.css'
import '../styles/global.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>KANBAN BOARD</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, maximum-scale=1 width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-full w-full flex flex-col">
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}