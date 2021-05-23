import { GITHUB_API } from "../../config/urls";
import { IGitRepo } from "../../Models/interfaces";

export async function getRepos(username: string): Promise<IGitRepo[]> {
  const repsone = await fetch(`${GITHUB_API}/${username}/repos`);
  return await repsone.json();
}
