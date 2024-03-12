import {apiService} from "../api/apiClient"
import {
  REPO_INFO_ENDPOINT,
  USER_FOLLOWING_ENDPOINT,
  USER_SEARCH_ENDPOINT,
  REPO_SEARCH_ENDPOINT,
  USER_INFO_ENDPOINT,
  USER_REPOS_ENDPOINT,
  USER_FOLLOWERS_ENDPOINT,
} from "../constants/apiUrls"
import {
  RepoApiResponse,
  UserSearchApiResponse,
  RepoSearchApiResponse,
  UserApiResponse,
  UserRepositoriesResponse,
  FollowApiResponse,
} from "../interfaces/apiResponse"
import {ReposList, Repo} from "../interfaces/repo"
import {usersList, User, UserFollow} from "../interfaces/user"
import {formatRepo, formatRepoList} from "../utils/formatRepo"
import {formatUserList, formatUser, formatUserRepoList, formatUserFollow} from "../utils/formatUser"

const searchRepos = async (searchInput: string): Promise<ReposList> => {
  const responseData = await apiService<RepoSearchApiResponse>(REPO_SEARCH_ENDPOINT(searchInput))
  return formatRepoList(responseData)
}

const getRepoInfo = async (owner: string, repo: string): Promise<Repo> => {
  const repoData = await apiService<RepoApiResponse>(REPO_INFO_ENDPOINT(owner, repo))
  return formatRepo(repoData)
}

const searchUsers = async (searchInput: string): Promise<usersList> => {
  const responseData = await apiService<UserSearchApiResponse>(USER_SEARCH_ENDPOINT(searchInput))
  return formatUserList(responseData)
}

const getUserInfo = async (username: string): Promise<User> => {
  const userData = await apiService<UserApiResponse>(USER_INFO_ENDPOINT(username))
  return formatUser(userData)
}

const getUserRepos = async (username: string): Promise<ReposList> => {
  const reposData = await apiService<UserRepositoriesResponse>(USER_REPOS_ENDPOINT(username))
  return formatUserRepoList(reposData)
}

const getUserFollowers = async (username: string): Promise<UserFollow[]> => {
  const followersData = await apiService<FollowApiResponse[]>(USER_FOLLOWERS_ENDPOINT(username))
  return formatUserFollow(followersData)
}

const getUserFollowings = async (username: string): Promise<UserFollow[]> => {
  const followingsData = await apiService<FollowApiResponse[]>(USER_FOLLOWING_ENDPOINT(username))
  return formatUserFollow(followingsData)
}

export const apiServices = {
  searchRepos,
  getRepoInfo,
  searchUsers,
  getUserInfo,
  getUserRepos,
  getUserFollowers,
  getUserFollowings,
}
