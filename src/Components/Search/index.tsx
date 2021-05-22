import React, { FC } from "react";
import "./index.scss";

const Search: FC = () => {
  return (
    <div className="search-container">
      <form>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Ex. kiranlm" id="username" />
          <input className="button-primary" type="submit" value="Send" />
        </fieldset>
      </form>
    </div>
  );
};

export default Search;
