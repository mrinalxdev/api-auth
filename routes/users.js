const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

router.post('/api/users/register', userController.register)
router.post('/api/users/login', userController.login)
router.post('/api/users/profile', userController.profile)

module.exports = router