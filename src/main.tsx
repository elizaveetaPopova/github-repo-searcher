import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css'
import { RepoStoreContext } from './store/index.ts'
import repoStore from './store/repo.store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RepoStoreContext.Provider value={repoStore}>
      <App />
    </RepoStoreContext.Provider>
  </StrictMode>,
)
