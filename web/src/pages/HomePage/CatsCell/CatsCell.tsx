import Board from 'src/components/Board'
import { cats } from 'src/services/cats'

export const data = async () => {
  return { cats: await cats() }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ cats }) => {
  return <Board cats={cats} />
}
