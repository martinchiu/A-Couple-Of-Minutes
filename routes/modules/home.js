const express = require('express')
const router = express.Router()

const homeController = require('../../controllers/home_controller')

router.get('/instruction', homeController.getInstruction)
router.get('/idea', homeController.getIdea)
router.get('/', homeController.getHome)

module.exports = router