export interface Repo {
  id: number
  name: string
  fullName: string
  topics: string[]
  description?: string
  createdAt?: string
  updatedAt?: string
  starsCount: number
  forksCount: number
  issuesCount: number
  owner: {
    id: number
    username: string
    avatarUrl: string
    userGitHubUrl: string
    apiUrl: string
  }
  repoGitHubUrl: string
}

export interface ReposList {
  count: number
  repos: Repo[]
}
