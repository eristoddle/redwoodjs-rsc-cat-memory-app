import Card from 'src/components/Card'
import { cats } from 'src/services/cats'

export const data = async () => {
  return { cats: await cats() }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ cats }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        margin: '20px',
      }}
    >
      {cats.map((cat) => (
        <Card cat={cat} key={cat._id} />
      ))}
    </div>
  )
}
