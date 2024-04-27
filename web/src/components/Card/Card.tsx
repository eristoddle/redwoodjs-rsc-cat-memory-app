const Card = ({ cat }) => {
  const { _id } = cat
  return (
    <div
      style={{
        width: '240px',
        height: '240px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={`https://cataas.com/cat?_id=${_id}`}
        alt="cat"
        style={{ objectFit: 'cover', width: '200px', height: '200px' }}
      />
    </div>
  )
}

export default Card
