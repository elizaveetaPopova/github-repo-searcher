import { makeAutoObservable } from 'mobx';

import type { Repository, SortOptionValue } from '../types/Repos/ReposTypes';

export class FavoritesRepositories {
  favorites: Repository[] = [];
  sortBy: SortOptionValue = 'updated';

  constructor() {
    makeAutoObservable(this);
  }

  setSortBy = (value: SortOptionValue) => {
    this.sortBy = value;
  };

  get sortedFavorites(): Repository[] {
    return [...this.favorites].sort((a, b) => {
      switch (this.sortBy) {
      case 'stars':
        return b.stargazers_count - a.stargazers_count;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'updated':
      default:
        return (
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      }
    });
  }

  addFavorite = (repository: Repository) => {
    if (!this.favorites.find((repo) => repo.id === repository.id)) {
      this.favorites.push(repository);
    }
  };

  removeFavorite = (repository: Repository) => {
    this.favorites = this.favorites.filter((repo) => repo.id !== repository.id);
  };

  toggleFavorite = (repository: Repository) => {
    const findedRepo = this.favorites.find((repo) => repo.id === repository.id);
    if (findedRepo) {
      this.removeFavorite(repository);
    } else {
      this.addFavorite(repository);
    }
  };
}

const favoritesStore = new FavoritesRepositories();
export default favoritesStore;
