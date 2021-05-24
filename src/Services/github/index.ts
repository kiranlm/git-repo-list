import { GITHUB_API } from "../../config/urls";
import { IGitRepo, IGitRepoItem } from "../../Models/interfaces";

export async function getRepos(username: string): Promise<IGitRepo[]> {
  const repsone = await fetch(`${GITHUB_API}/users/${username}/repos`);
  return await repsone.json();
}

export async function getRepoItem(
  username: string,
  repo: string
): Promise<IGitRepoItem[]> {
  const repsone = await fetch(
    `${GITHUB_API}/repos/${username}/${repo}/contents`
  );
  return await repsone.json();
}

export async function getReadMeContent(url: string): Promise<string> {
  const repsone = await fetch(url);
  return await repsone.text();
}
