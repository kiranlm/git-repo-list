import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRepoItem, getReadMeContent } from "../../Services/github";
import { IGitRepoItem, IParamType } from "../../Models/interfaces";
import "./index.scss";
import Spinner from "../Spinner";
import ReactMarkdown from "react-markdown";

const RepoItem: FC = () => {
  const { username, repo } = useParams<IParamType>();
  const [files, setFiles] = useState<IGitRepoItem[]>([]);
  const [readMe, setReadMe] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const filesList: IGitRepoItem[] =
        (repo && (await getRepoItem(username, repo))) || [];
      if (filesList.length) {
        setFiles(filesList);
        const readMeFile = filesList.find(
          (item: IGitRepoItem) =>
            item.name.toLowerCase() === "readme.md" ||
            item.name.toLowerCase() === "readme"
        );
        if (readMeFile && readMeFile.download_url) {
          const contents = await getReadMeContent(readMeFile.download_url);
          setReadMe(contents);
        }
      }
      setLoading(false);
    })();
  }, [username, repo]);
  return (
    <div className="item-container">
      <div className="files">
        {loading && <Spinner />}
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Size</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {files.map((item: IGitRepoItem, index: number) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>
                  <a
                    href={item.download_url}
                    target="__blank"
                    title={item.name}
                  >
                    Open File
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="readme">
        <ReactMarkdown className="markdown">{readMe}</ReactMarkdown>
      </div>
    </div>
  );
};

export default RepoItem;
