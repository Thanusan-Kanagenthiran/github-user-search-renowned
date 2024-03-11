import {apiService} from "../api/apiClient"
import {
  REPO_INFO_ENDPOINT,
  USER_FOLLOWING_ENDPOINT,
  USER_SEARCH_ENDPOINT,
  REPO_SEARCH_ENDPOINT,
  USER_INFO_ENDPOINT,
  USER_REPOS_ENDPOINT,
} from "../constants/apiUrls"
import {
  RepoApiResponse,
  FollowerApiResponse,
  UserSearchApiResponse,
  RepoSearchApiResponse,
  UserApiResponse,
  FollowingApiResponse,
  UserRepositoriesResponse,
} from "../interfaces/apiResponse"

const searchRepos = async (searchInput: string): Promise<RepoSearchApiResponse> => {
  const responseData = await apiService<RepoSearchApiResponse>(REPO_SEARCH_ENDPOINT(searchInput))
  return responseData
}

const getRepoInfo = async (owner: string, repo: string): Promise<RepoApiResponse> => {
  const repoData = await apiService<RepoApiResponse>(REPO_INFO_ENDPOINT(owner, repo))
  return repoData
}

const searchUsers = async (searchInput: string): Promise<UserSearchApiResponse> => {
  const responseData = await apiService<UserSearchApiResponse>(USER_SEARCH_ENDPOINT(searchInput))
  return responseData
}

const getUserInfo = async (username: string): Promise<UserApiResponse> => {
  const userData = await apiService<UserApiResponse>(USER_INFO_ENDPOINT(username))
  return userData
}

const getUserRepos = async (username: string): Promise<UserRepositoriesResponse> => {
  const reposData = await apiService<UserRepositoriesResponse>(USER_REPOS_ENDPOINT(username))
  return reposData
}

const getUserFollowers = async (username: string): Promise<FollowerApiResponse> => {
  const followersData = await apiService<FollowerApiResponse>(USER_FOLLOWING_ENDPOINT(username))
  return followersData
}

const getUserFollowings = async (username: string): Promise<FollowingApiResponse> => {
  const followingsData = await apiService<FollowingApiResponse>(USER_FOLLOWING_ENDPOINT(username))
  return followingsData
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
