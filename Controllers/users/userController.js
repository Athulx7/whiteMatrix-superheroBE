const grievanceData = require("../../Models/grievanceSchema")
const nodemailer = require('nodemailer')

exports.addGrievance = async(req,res)=>{
    // console.log("inside add grievance controller")
    // console.log(req.body)
    // console.log(req.file.filename)
    const {fullname,email,phone,location,grievanceType,subject,description,date,evidence,priority,contactMethod} = req.body
    const images = req.file ? req.file.filename : evidence
    // console.log(images)

    try{
        const existingGrievance = await grievanceData.findOne({subject:subject,description:description})

        if(existingGrievance){
            res.status(400).json("this grievance is already added")
        }
        else{
            const newGrievnace = new grievanceData({
                fullname,email,phone,location,grievanceType,subject,description,date,evidence:images,priority,contactMethod

            })

            await newGrievnace.save()
            res.status(200).json(newGrievnace)

            //sending the email to user from super hero

            const emailTransporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:"dummyproject06@gmail.com",
                    pass:'ycvf regy kbdm zmcz'
                }
            })

            const sendCOnfirmationemail = {
                from : "dummyproject06@gmail.com",
                to: email,
                subject: "Your Grievance Has Been Submitted!",
                text: `Hello,\n\nThank you for submitting your grievance titled "${subject}". Our superhero is working on it and will be in touch soon!\n\nBest regards,\nHeroHub Team`,
            }

           await emailTransporter.sendMail(sendCOnfirmationemail)
            console.log("Email sent successfully")
           
        }


    }
    catch(err){
        console.log("adding grievance from user is faild due to ")
        res.status(401).json(err)
    }
    
}