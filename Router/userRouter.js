const express = require('express')

const userRouter = express.Router()

const multerMiddleware = require('../Middleware/multterMIdleware')
const userController = require('../Controllers/users/userController')



userRouter.post('/user/addGrievance',multerMiddleware.single('evidence'),userController.addGrievance)





module.exports = userRouter