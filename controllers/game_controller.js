const cardsNumber = require('../helpers/draw-card')
const gameProcess = require('../services/game-process')
const gameController = {
  getStart: (req, res) => {
    res.render('gameStart', {
      style: "game/start"
    })
  },
  getfirstMethod: (req, res) => {
    const { level } = req.params
    const cards = cardsNumber('firstMethod', level)
    const finale = require('../finale.json')[level]
    let { player, deck, cardsAmount } = gameProcess(cards)
    const martin = player[0]
    const stacy = player[1]
    res.render('gameProcess', {
      cardsAmount,
      deck,
      martin,
      stacy,
      finale,
      style: "game/process",
      script: 'process',
    })
  }
  ,
  getsecondMethod: (req, res) => {
    const { number } = req.query
    const cards = cardsNumber('secondMethod', number)
    const finale = require('../finale.json')[0]
    let { player, deck, cardsAmount } = gameProcess(cards)
    const martin = player[0]
    const stacy = player[1]
    res.render('gameProcess', {
      cardsAmount,
      deck,
      martin,
      stacy,
      finale,
      style: "game/process",
      script: 'process',
    })
  },
  getthirdMethod: (req, res) => {
    const { topic } = req.params
    const { cards, num } = cardsNumber('thirdMethod', topic)
    const finale = require('../finale.json')[num]
    let { player, deck, cardsAmount } = gameProcess(cards)
    const martin = player[0]
    const stacy = player[1]
    res.render('gameProcess', {
      cardsAmount,
      deck,
      martin,
      stacy,
      finale,
      style: "game/process",
      script: 'process',
    })
  }
}

module.exports = gameController
