import React, { FC } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header></header>
    {children}
    <footer></footer>
  </div>
);

export default Layout;
