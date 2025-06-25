import { makeAutoObservable, runInAction } from 'mobx'
import axios from 'axios'

import { fetchRepos } from '../api/repo.api'
import type { Repository } from '../types/Repos/ReposTypes'



export interface IRepoStore {
  repos: Repository[]
  loading: boolean
  error: string | null

  fetchRepos: (query: string) => Promise<void>
}

class RepoStore implements IRepoStore {
  repos: Repository[] = []
  loading: boolean = false
  error: string | null = null
  constructor() {
    makeAutoObservable(this) 
  }

  fetchRepos = async (query: string) => {
    this.loading = true
    this.error = null

    try {
      const response = await fetchRepos(query)
      console.log('response :>> ', response);
      runInAction(() => {
        this.repos = response.items
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

const repoStore = new RepoStore()
export default repoStore