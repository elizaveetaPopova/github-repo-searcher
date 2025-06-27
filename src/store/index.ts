import { createContext, useContext } from "react";
import repoStore from "./repo.store";

export const RepoStoreContext = createContext(repoStore)

export const useRepoStore = () => useContext(RepoStoreContext)