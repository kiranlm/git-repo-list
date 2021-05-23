import React, { FC, useState } from "react";
import { useHistory } from "react-router";
import "./index.scss";

const Search: FC = () => {
  const history = useHistory();
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const onChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    const username = e.currentTarget.value;
    if (username && !!username.match(/^[a-zA-Z0-9_]*$/)) {
      setUsername(username);
      setError("");
    } else {
      if (username) {
        setError("No special characters or spaces allowed !");
      } else {
        setUsername("");
      }
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    history.push(`/repos/${username}`);
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <label htmlFor="username">Enter a github username</label>
          <input
            type="text"
            placeholder="Ex. kiranlm"
            id="username"
            value={username}
            onChange={onChangeUsername}
          />
          {error && <p className="error">{error}</p>}
          <input
            className="button-primary"
            type="submit"
            value="Explore"
            disabled={!username}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Search;
