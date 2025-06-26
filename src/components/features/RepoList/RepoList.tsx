import type { Repository } from "../../../types/Repos/ReposTypes"
import RepoCard from "../../ui/RepoCard"

interface RepoListProps {
  repositories: Repository[]
}

const RepoList = ({repositories}:RepoListProps) => {
  return (
    <>
      {
        repositories.map(repository => <RepoCard key={repository.id} repo={repository}/>)
      }
    </>
  )
}
export default RepoList  