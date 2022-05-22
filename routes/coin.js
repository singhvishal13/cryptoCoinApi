const express = require('express')
const coinController = require('../controller/coinController')
const router = express.Router()

router.get('/price', coinController.getCoins)

module.exports = router