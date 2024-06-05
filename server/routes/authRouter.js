const express = require('express')
const {
        register,
        login
        } = require('../controllers/authController')
const router = express.Router()

router.post('/', register)
router.post('/', login)

module.exports = router