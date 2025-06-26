import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'

import { fetchRepositories } from '../api/repo.api'
import type { Repository } from '../types/Repos/ReposTypes'



export interface IGithubStore  {
  repositories: Repository[]
  totalCount: number
  loading: boolean
  error: string | null

  fetchRepositories: (query: string) => Promise<void>
}

class GithubStore  implements IGithubStore {
  repositories: Repository[] = []
  totalCount: number = 0
  loading: boolean = false
  error: string | null = null
  constructor() {
    makeAutoObservable(this) 
  }

  fetchRepositories = async (query: string) => {
    this.loading = true
    this.error = null

    try {
      const response = await fetchRepositories(query)
      runInAction(() => {
        this.repositories = response.items
        this.totalCount = response.total_count
        this.loading = false
      })
    } catch (e) {
      runInAction(() => {
        if (axios.isAxiosError(e)) {
          this.error = e.message
        } else {
          this.error = String(e)
        }
        this.loading = false
      })
    }

  }
  
}

const githubStore = new GithubStore()
export default githubStore