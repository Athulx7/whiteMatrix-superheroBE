const express = require('express')

const loginRouter = new express.Router()

const loginController = require('../Controllers/Login/loginController')


loginRouter.post('/user/register',loginController.register)
loginRouter.post('/user/login',loginController.loginUser)








module.exports = loginRouter