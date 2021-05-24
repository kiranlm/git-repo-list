import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRepoItem, getReadMeContent } from "../../Services/github";
import { IGitRepoItem, IParamType } from "../../Models/interfaces";
import "./index.scss";
import Spinner from "../Spinner";
import ReactMarkdown from "react-markdown";

const fileIcon = (
  <svg viewBox="0 0 16 16" version="1.1" height="16" width="16">
    <path
      fill="#ccc"
      d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"
    ></path>
  </svg>
);

const folderIcon = (
  <svg viewBox="0 0 16 16" version="1.1" height="16" width="16">
    <path
      fill="#7a00c4"
      d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"
    ></path>
  </svg>
);

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
              <th colSpan={2}>Name</th>
              <th>Size</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {files.map((item: IGitRepoItem, index: number) => (
              <tr key={index}>
                <td width={36}>
                  {item.type === "dir" ? folderIcon : fileIcon}
                </td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>
                  {item.type !== "dir" && (
                    <a
                      href={item.download_url}
                      target="__blank"
                      title={item.name}
                    >
                      Open File
                    </a>
                  )}
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
