export interface Repository {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    avatar_url: string
  }
  html_url: string
  stargazers_count: number
  forks_count: number
  archived: boolean
  created_at: string
  updated_at: string
  language: string
}