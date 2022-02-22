const cardsNumber = require('../helpers/draw-card')

const gameController = {
  getStart: (req, res) => {
    res.render('game', {
      style: "game/start"
    })
  },
  getfirstMethod: (req, res) => {
    const { level } = req.params
    const cards = cardsNumber('firstMethod', level)
    res.send(`${level}`)
  }
  ,
  getsecondMethod: (req, res) => {
    const { number } = req.query
    const cards = cardsNumber('secondMethod', number)
    res.send(`${number}`)
  },
  getthirdMethod: (req, res) => {
    const { topic } = req.params
    const cards = cardsNumber('thirdMethod', topic)
    res.send(`${topic}`)
  }
}

module.exports = gameController
