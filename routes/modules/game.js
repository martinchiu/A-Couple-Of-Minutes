const express = require('express')
const router = express.Router()

const gameController = require('../../controllers/game_controller')

router.get('/start', gameController.getStart)

module.exports = router