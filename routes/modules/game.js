const express = require('express')
const router = express.Router()

const gameController = require('../../controllers/game_controller')

router.get('/firstMethod/:level', gameController.getfirstMethod)

router.get('/secondMethod', gameController.getsecondMethod)

router.get('/thirdMethod/topic/:topicNumber', gameController.getthirdMethod)

router.get('/start', gameController.getStart)

module.exports = router