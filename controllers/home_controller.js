module.exports = {
  getHome: (req, res) => {
    res.render('home', {
      style: "home"
    })
  }
}