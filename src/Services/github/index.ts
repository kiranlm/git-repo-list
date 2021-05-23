import { GITHUB_API } from "../../config/urls";
import { IGitRepo, IGitRepoResponse } from "../../Models/interfaces";

export async function getRepos(
  username: string,
  page: number
): Promise<IGitRepoResponse<IGitRepo>[]> {
  const repsone = await fetch(`${GITHUB_API}/${username}/repos?page=${page}`);
  return await repsone.json();
}
