'use client'

import { useEffect } from 'react'

import Card from 'src/components/Card'

const Board = ({ cats }) => {
  const [chosenCards, setChosenCards] = React.useState([])
  const [foundCards, setFoundCards] = React.useState([])
  const [tries, setTries] = React.useState(0)
  const timeout = React.useRef(null)

  useEffect(() => {
    if (chosenCards.length === 2) {
      setTimeout(checkCards, 500)
    }
  }, [chosenCards])

  useEffect(() => {
    if (foundCards.length === cats.length) {
      alert(`You won in ${tries} tries`)
    }
  }, [foundCards, cats, tries])

  const checkCards = () => {
    const [first, second] = chosenCards
    if (cats[first]._id === cats[second]._id) {
      setFoundCards((prev) => [...prev, cats[first]._id])
      setChosenCards([])
      return
    }

    timeout.current = setTimeout(() => {
      setChosenCards([])
    }, 500)
  }

  const handleCardClick = (index) => {
    if (chosenCards.length === 1) {
      setChosenCards((prev) => [...prev, index])
      setTries((tries) => tries + 1)
    } else {
      clearTimeout(timeout.current)
      setChosenCards([index])
    }
  }

  const isFlipped = (index) => {
    return chosenCards.includes(index)
  }

  const isFound = (_id) => {
    return Boolean(foundCards.includes(_id))
  }

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
      {cats.map((cat, id) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div key={cat._id} onClick={() => handleCardClick(id)}>
          <Card
            image={
              isFlipped(id) || isFound(cat._id)
                ? `https://cataas.com/cat?_id=${cat._id}`
                : 'https://d33wubrfki0l68.cloudfront.net/72b0d56596a981835c18946d6c4f8a968b08e694/82254/images/logo.svg'
            }
          />
        </div>
      ))}
    </div>
  )
}

export default Board
