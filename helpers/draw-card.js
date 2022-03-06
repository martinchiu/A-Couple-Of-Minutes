const cardsNumber = function draw(method, params) {
  if (method === 'firstMethod') {
    return Array.from({ length: 33 }, (value, index) => value = index + 33 * (params - 1) + 1)
  } else if (method === 'secondMethod') {
    function getRandomNumberArray() {
      // 產生一個包含 1~99 數字的陣列
      const numberArray = Array.from(Array(100).keys())
      numberArray.splice(0, 1)
      // Fisher–Yates shuffle
      for (let index = numberArray.length - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1))
          ;[numberArray[index], numberArray[randomIndex]] = [numberArray[randomIndex], numberArray[index]]
      }
      return numberArray.slice(0, params)
    }
    return getRandomNumberArray()
  } else if (method === 'thirdMethod') {
    const cards = []
    let num = 0
    switch (params) {
      case 'firstDate':
        cards.push(...[3, 18, 35, 13, 26, 41, 5, 21, 95, 23])
        return { cards, num }
      case 'friendDate':
        cards.push(...[24, 26, 75, 27, 3, 90, 4, 20, 35, 94])
        num = 1
        return { cards, num }
      case 'happyTrip':
        cards.push(...[7, 28, 11, 76, 19, 6, 17, 8, 30, 14])
        num = 2
        return { cards, num }
      case 'heavyDate':
        cards.push(...[32, 42, 36, 60, 46, 71, 56, 85, 93, 34])
        num = 3
        return { cards, num }
      case 'cozyTrip':
        cards.push(...[15, 31, 24, 16, 25, 44, 10, 43, 1, 33])
        num = 4
        return { cards, num }
    }
  }
}

module.exports = cardsNumber