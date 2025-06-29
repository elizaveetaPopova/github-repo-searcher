import React from 'react';

import { FavoritesStoreContext, RepoStoreContext } from './store';
import { FavoritesRepositories } from './store/favorites.store';
import { GithubStore } from './store/repo.store';

export function AppProviders({
  githubStore,
  favoritesStore,
  children,
}: {
  githubStore: GithubStore;
  favoritesStore: FavoritesRepositories;
  children: React.ReactNode;
}) {
  return (
    <RepoStoreContext.Provider value={githubStore}>
      <FavoritesStoreContext.Provider value={favoritesStore}>
        {children}
      </FavoritesStoreContext.Provider>
    </RepoStoreContext.Provider>
  );
}
