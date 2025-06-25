import type { Repository } from "../../../types/Repos/ReposTypes"
import RepoCard from "../../ui/RepoCard"

interface RepoListProps {
  repos: Repository[]
}

const RepoList = ({repos}:RepoListProps) => {
  return (
    <>
      {
        repos.map(repo => <RepoCard key={repo.id} repo={repo}/>)
      }
    </>
  )
}
export default RepoList  