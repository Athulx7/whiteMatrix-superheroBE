const mongoose = require('mongoose')

const connectingString = process.env.DATABASE

mongoose.connect(connectingString).then((res)=>{
    console.log("mongoDB connected success")
}).catch((err)=>{
    console.log("mongoDB connection faild due to")
    console.log(err)
})