const draw = require('../helpers/function-card')
const cardData = require('../cards.json')
const functionCard = draw(2)
const player = [
  { name: 'Martin', functionCard: functionCard[0] },
  { name: 'Stacy', functionCard: functionCard[1] }
]
const gameProcess = (cards) => {
  const cardsAmount = cards.length
  const deck = []
  // 透過卡片數字拿到卡片的資料
  cards.map(c => {
    deck.push(cardData[c])
  })
  return { player, deck, cardsAmount }
}

module.exports = gameProcess
