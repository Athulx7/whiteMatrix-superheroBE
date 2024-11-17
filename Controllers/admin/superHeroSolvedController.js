const solvedGrievance = require("../../Models/solvedGrievance")

exports.getSolvedGrievance = async(req,res)=>{
    // console.log("inside get solved grievnace contrlller")

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
        const result = await solvedGrievance.find(searchQuery)
        res.status(200).json(result)

    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.getSolvedSelected = async(req,res)=>{
    // console.log("inside get solved selected controller")
    // console.log(req.params)
    const {id} = req.params
    try{

        const result = await solvedGrievance.findById(id)
        res.status(200).json(result)

    }
    catch(err){
        res.status(401).json(err)
    }
}