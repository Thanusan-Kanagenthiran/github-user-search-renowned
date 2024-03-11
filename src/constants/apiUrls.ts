export const GITHUB_API_BASE_URL = "https://api.github.com"

export const REPO_SEARCH_ENDPOINT = (searchInput: string) => `${GITHUB_API_BASE_URL}/search/repositories?q=${searchInput}`
export const USER_SEARCH_ENDPOINT = (searchInput: string) => `${GITHUB_API_BASE_URL}/search/users?q=${searchInput}`
export const USER_REPOS_ENDPOINT = (username: string) => `${GITHUB_API_BASE_URL}/users/${username}/repos`
export const USER_INFO_ENDPOINT = (username: string) => `${GITHUB_API_BASE_URL}/users/${username}`
export const REPO_INFO_ENDPOINT = (owner: string, repo: string) => `${GITHUB_API_BASE_URL}/repos/${owner}/${repo}`
export const USER_FOLLOWING_ENDPOINT = (username: string) => `${GITHUB_API_BASE_URL}/users/${username}/following`
export const USER_FOLLOWERS_ENDPOINT = (username: string) => `${GITHUB_API_BASE_URL}/users/${username}/followers`
