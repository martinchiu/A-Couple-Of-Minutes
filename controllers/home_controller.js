module.exports = {
  getHome: (req, res) => {
    res.render('home', {
      style: "home"
    })
  },
  getInstruction: (req, res) => {
    res.render('instruction')
  },
  getIdea: (req, res) => {
    res.render('idea')
  }
}