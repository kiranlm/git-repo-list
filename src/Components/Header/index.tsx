import React, { FC } from "react";
import "./index.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <section className="container">
          <a className="navigation-title" href="/" title="Git repo search">
            <strong>Github</strong> Repo Search
          </a>
        </section>
      </nav>
    </header>
  );
};

export default Header;
