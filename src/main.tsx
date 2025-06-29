import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import repoStore from './store/repo.store.ts';
import favoritesStore from './store/favorites.store.ts';
import { AppProviders } from './AppProviders.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders githubStore={repoStore} favoritesStore={favoritesStore}>
      <App />
    </AppProviders>
  </StrictMode>
);
