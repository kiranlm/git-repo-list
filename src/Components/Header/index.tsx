import React, { FC } from "react";
import "./index.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <section className="container">
          <a className="navigation-title" href="#" title="Git repo search">
            Git Repo Search
          </a>
        </section>
      </nav>
    </div>
  );
};

export default Header;
