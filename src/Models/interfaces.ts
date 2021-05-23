export interface IGitRepo {
  name: string;
  html_url: string;
  created_at: string;
  open_issues: number;
  watchers_count: number;
}

export interface IParamType {
  username: string;
}

export interface IGitRepoResponse<T> {
  [index: number]: T;
}
