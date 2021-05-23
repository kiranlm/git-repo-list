import React, { ReactChildren, ReactChild } from "react";
import Header from "../Components/Header";
import "./index.scss";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <a className="skip-link" href="/">
        Skip to main
      </a>
      <Header />
      <main id="main" className="app-container">
        {children}
      </main>
    </>
  );
};

export default Layout;
