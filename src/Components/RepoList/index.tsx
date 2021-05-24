import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRepos } from "../../Services/github";
import { IGitRepo, IParamType } from "../../Models/interfaces";
import "./index.scss";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const RepoList: FC = () => {
  const { username } = useParams<IParamType>();
  const [repos, setRepos] = useState<IGitRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const reposList: IGitRepo[] = await getRepos(username);
      if (reposList.length) {
        setRepos(reposList);
      }
      setLoading(false);
    })();
  }, [username]);
  return (
    <div className="repo-list">
      {loading && <Spinner />}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Open Issues</th>
            <th>Watchers</th>
            <th>Created On</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((item: IGitRepo, index: number) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.open_issues}</td>
              <td>{item.watchers_count}</td>
              <td>{item.created_at}</td>
              <td>
                <Link to={`/repo/${username}/${item.name}`} title={item.name}>
                  Go to repo
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RepoList;
