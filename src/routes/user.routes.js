const { LOGIN } = require('../global/_var')

/******* DEPENDENCY ********/

const express = require('express')
const router = express.Router()

/******* CONTROLLER ********/

const getInfoController = require('../controllers/getInfo.Controller')

/******* ROUTES ********/

router.post(LOGIN, getInfoController.login)

module.exports = router