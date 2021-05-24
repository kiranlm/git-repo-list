export interface IGitRepo {
  name: string;
  html_url: string;
  created_at: string;
  open_issues: number;
  watchers_count: number;
}

export interface IGitRepoItem {
  name: string;
  size: string;
  download_url: string;
  type: string;
}

export interface IParamType {
  username: string;
  repo?: string;
  url?: string;
}

export interface IGitRepoResponse<T> {
  [index: number]: T;
}
