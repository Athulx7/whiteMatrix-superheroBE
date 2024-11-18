// this is common for both two dashboard

const users = require("../../Models/userSchema")
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    // console.log("inside register controller")
    // console.log(req.body)
    const {name,email,password} = req.body

    try{
        const existingUser = await users.findOne({email:email})

        if(existingUser){
            res.status(400).json("the email is already registerd")
        }
        else{
            const newUser = new users({
                username:name,
                email:email,
                password:password     
            })

            await newUser.save()
            res.status(200).json(newUser)
        }

    }
    catch(err){
        // console.log("registration failed due to")
        res.status(401).json(err)
    }

}


exports.loginUser = async(req,res)=>{
    // console.log("inside login controller ")
    // console.log(req.body)
    const {email,password} = req.body
    try{

        const existingUser = await users.findOne({email:email,password:password})
        if(existingUser){
            const token = jwt.sign({userid:existingUser._id},'userpwd123')
            res.status(200).json({data:existingUser,token:token})
            
        }
        else{
            res.status(400).json("invalid email or password")
        }

    }
    catch(err){
        // console.log("login failed due to ")
        res.status(401).json(err)
    }
}