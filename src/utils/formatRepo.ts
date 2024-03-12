import {RepoApiResponse, RepoSearchApiResponse} from "../interfaces/apiResponse"
import {Repo, ReposList} from "../interfaces/repo"

export const formatRepo = (repo: RepoApiResponse): Repo => {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    topics: repo.topics,
    starsCount: repo.stargazers_count,
    forksCount: repo.forks_count,
    issuesCount: repo.open_issues_count,
    owner: {
      id: repo.owner.id,
      username: repo.owner.login,
      avatarUrl: repo.owner.avatar_url,
      userGitHubUrl: repo.owner.html_url,
      apiUrl: repo.owner.url,
    },
    repoGitHubUrl: repo.url,
  }
}

export const formatRepoList = (reposData: RepoSearchApiResponse): ReposList => {
  const count = reposData.total_count

  const repos: Repo[] = reposData.items.map((repo) => {
    return formatRepo(repo)
  })

  return {count, repos}
}
