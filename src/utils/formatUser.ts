import {UserApiResponse, UserSearchApiResponse, RepoApiResponse, FollowApiResponse} from "../interfaces/apiResponse"
import {ReposList, Repo} from "../interfaces/repo"
import {User, usersList, UserFollow} from "../interfaces/user"
import {formatRepo} from "./formatRepo"

export const formatUser = (user: UserApiResponse): User => {
  return {
    id: user.id,
    username: user.login,
    avatarUrl: user.avatar_url,
    userGitHubUrl: user.html_url,
    apiUrl: user.url,
    name: user.name,
    bio: user.bio,
    followers: user.followers,
    following: user.following,
    company: user.company,
    location: user.location,
    createdAt: user.created_at,
    publicRepos: user.public_repos,
    updatedAt: user.updated_at,
    email: user.email,
    website: user.email,
  }
}

export const formatUserList = (usersData: UserSearchApiResponse): usersList => {
  const count = usersData.total_count

  const users: User[] = usersData.items.map((user) => {
    return formatUser(user)
  })

  return {count, users}
}

export const formatUserRepoList = (reposData: RepoApiResponse[]): ReposList => {
  const count = reposData.length

  const repos: Repo[] = reposData.map((repo) => {
    return formatRepo(repo)
  })

  return {count, repos}
}

export const formatUserFollow = (followData: FollowApiResponse[]): UserFollow[] => {
  return followData.map((follow) => {
    return {
      id: follow.id,
      avatarUrl: follow.avatar_url,
      userGitHubUrl: follow.html_url,
      apiUrl: follow.url,
      username: follow.login,
    }
  })
}
