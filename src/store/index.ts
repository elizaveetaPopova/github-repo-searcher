import { createContext, useContext } from 'react';
import githubStore from './repo.store';
import favoritesStore from './favorites.store';

export const RepoStoreContext = createContext(githubStore);
export const FavoritesStoreContext = createContext(favoritesStore);

export const useRepoStore = () => useContext(RepoStoreContext);
export const useFavoritesStore = () => useContext(FavoritesStoreContext);
