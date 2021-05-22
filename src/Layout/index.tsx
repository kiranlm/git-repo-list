import React, { ReactChildren, ReactChild } from "react";
import Header from "../Components/Header";
import "./index.scss";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="app-container">{children}</div>
    </>
  );
};

export default Layout;
