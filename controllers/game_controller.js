module.exports = {
  getStart: (req, res) => {
    res.render('game', {
      style: "game/start"
    })
  },
  getfirstMethod: (req, res) => {
    const { level } = req.params
    res.send(`${level}`)
  }
  ,
  getsecondMethod: (req, res) => {
    const { number } = req.query
    res.send(`${number}`)
  },
  getthirdMethod: (req, res) => {
    const { topicNumber } = req.params
    res.send(`${topicNumber}`)
  }
}