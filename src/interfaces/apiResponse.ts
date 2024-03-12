export interface RepoApiResponse {
  id: number
  name: string
  full_name: string
  owner: UserApiResponse
  html_url: string
  description?: string
  url: string
  language?: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  open_issues_count: number
  created_at?: string
  updated_at?: string
  topics: string[]
}

export interface UserApiResponse {
  id: number
  name?: string
  avatar_url: string
  login: string
  html_url: string
  bio?: string
  followers: number
  following: number
  company?: string
  location?: string
  created_at: string
  public_repos: number
  updated_at: string
  email?: string
  blog?: string
  url: string
}

export interface FollowApiResponse {
  id: number
  login: string
  avatar_url: string
  html_url: string
  url: string
}

export interface UserRepositoriesResponse extends Array<RepoApiResponse> {}

export interface UserSearchApiResponse {
  total_count: number
  incomplete_results: boolean
  items: UserApiResponse[]
}

export interface RepoSearchApiResponse {
  total_count: number
  incomplete_results: boolean
  items: RepoApiResponse[]
}
