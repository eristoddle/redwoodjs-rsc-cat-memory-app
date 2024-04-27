const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const shuffle = (array) => {
  const length = array.length
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i)
    const currIndex = i - 1
    swap(array, currIndex, randomIndex)
  }
  return array
}

export const cats = async () => {
  const res = await fetch('https://cataas.com/api/cats?type=square&limit=12')
  const data = await res.json()
  const doubled = data.flatMap((i) => [i, i])
  const shuffled = shuffle(doubled)
  return shuffled
}
