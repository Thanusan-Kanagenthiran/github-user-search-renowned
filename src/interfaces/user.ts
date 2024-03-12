export interface User {
  id: number
  name?: string
  avatarUrl: string
  username: string
  userGitHubUrl: string
  bio?: string
  followers: number
  following: number
  company?: string
  location?: string
  createdAt: string
  publicRepos: number
  updatedAt: string
  email?: string
  website?: string
  apiUrl: string
}

export interface usersList {
  count: number
  users: User[]
}

export interface UserFollow {
  id: number
  avatarUrl: string
  userGitHubUrl: string
  apiUrl: string
  username: string
}
