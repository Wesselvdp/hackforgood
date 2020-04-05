import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { initGA, logPageView } from "./GoogleAnalytics";

type Props = {
  title?: string;
};
declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}
const Layout: FC<Props> = ({
  children,
  title = "This is the default title",
}) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header> </header>
      <body
        style={{
          backgroundColor: "rgb(7,23,33)",
          margin: "0",
          padding: "15px",
          color: "rgb(142,213, 198)",
          fontFamily: "Inconsolata, monospace",
        }}
      >
        {children}
      </body>

      <footer></footer>
    </div>
  );
};

export default Layout;
