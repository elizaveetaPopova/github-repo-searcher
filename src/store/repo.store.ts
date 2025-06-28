import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

import { fetchRepositories } from '../api/repo.api';
import type { Repository, SortOptionValue } from '../types/Repos/ReposTypes';

export class GithubStore {
  query: string = '';
  repositories: Repository[] = [];
  totalCount: number = 0;
  sortBy: SortOptionValue = 'updated';
  favorites: Repository[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setQuery = (value: string) => {
    this.query = value;
  };

  setSortBy = (value: SortOptionValue) => {
    this.sortBy = value;
  };

  fetchRepositories = async (query: string) => {
    this.loading = true;
    this.error = null;

    try {
      const response = await fetchRepositories(query, this.sortBy);
      let sortedItems = response.items;

      if (this.sortBy === 'name') {
        sortedItems = [...sortedItems].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      runInAction(() => {
        this.repositories = sortedItems;
        this.totalCount = response.total_count;
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.loading = false;
        this.error = axios.isAxiosError(e) ? e.message : String(e);
      });
    }
  };
}

const githubStore = new GithubStore();
export default githubStore;
