const grievanceData = require("../../Models/grievanceSchema")
const users = require("../../Models/userSchema")

exports.getsuserdetails = async(req,res)=>{
    // console.log("inside get user detials controller of the super hero controller")
    try{
        const result = await users.find()
        res.status(200).json(result)
    }
    catch(err)
    {
        console.log("getting user details failed due to")
        res.status(401).json(err)
    }
}


exports.getCountGrievance = async(req,res)=>{
    // console.log("inside the get count grievance")
    try{
        const result = await grievanceData.find()
        res.status(200).json(result)

    }
    catch(err)
    {
        console.log("getting grievnace details failed due to")
        res.status(401).json(err)
    }
}





exports.getGrievanceDetails = async(req,res)=>{
    // console.log("inside get grievance details controller")
    const searchKey = req.query.search 
    // console.log(searchKey)

    
    const searchQuery = {
        $or:[
            {
                location:{
                    $regex: searchKey, $options: 'i'
                }

            }
            
        ]
    }
    try{
        const result = await grievanceData.find(searchQuery)
        res.status(200).json(result)

    }
    catch(err)
    {
        console.log("getting grievnace details failed due to")
        res.status(401).json(err)
    }

}



exports.getSelectedDetails = async(req,res)=>{
    // console.log("inside get selected details")
    // console.log(req.params)
    const {id} = req.params
    try{
        const result = await grievanceData.findOne({_id:id})
        res.status(200).json(result)

    }
    catch(err){
        res.status(401).json(err)
    }
}