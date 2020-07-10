const express = require('express')
const registerationValidation = require('../../../utils/sanitization/user/userValidation')
const { registerUser } = require('../../../controller/user/register')
const router = express.Router()

router.post('/register', registerationValidation, registerUser)

module.exports = router