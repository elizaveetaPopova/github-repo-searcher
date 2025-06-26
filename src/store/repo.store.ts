import { makeAutoObservable, runInAction } from 'mobx';
import axios from 'axios';

import { fetchRepositories } from '../api/repo.api';
import type { Repository, SortOptionValue } from '../types/Repos/ReposTypes';

export interface IGithubStore {
  repositories: Repository[];
  sortBy: SortOptionValue;
  totalCount: number;
  loading: boolean;
  error: string | null;

  fetchRepositories: (query: string) => Promise<void>;
}

class GithubStore implements IGithubStore {
  repositories: Repository[] = [];
  totalCount: number = 0;
  sortBy: SortOptionValue = 'updated';
  loading: boolean = false;
  error: string | null = null;
  constructor() {
    makeAutoObservable(this);
  }

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
        sortedItems = response.items.sort((a: Repository, b: Repository) =>
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
