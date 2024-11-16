const express = require('express')
require('dotenv').config()
const cors = require('cors')
const loginRouter = require('./Router/loginRouter')
const userRouter = require('./Router/userRouter')
const superheroROuter = require('./Router/superHeroRouter')
require('./DB/connection')

const shServer = express()
shServer.use(cors())
shServer.use(express.json())
shServer.use(loginRouter)
shServer.use(userRouter)
shServer.use(superheroROuter)

shServer.use('/uploads',express.static('./uploads'))

const PORT = 3200

shServer.listen(PORT,()=>{
    console.log(`super hero server is runnig in PORT ${PORT}`)
})

shServer.get('/',(req,res)=>{
    res.send("the super hero server is running successfully")
})