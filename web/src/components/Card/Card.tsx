const Card = ({ image }) => {
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
        src={image}
        alt="cat"
        style={{ objectFit: 'cover', width: '200px', height: '200px' }}
      />
    </div>
  )
}

export default Card
