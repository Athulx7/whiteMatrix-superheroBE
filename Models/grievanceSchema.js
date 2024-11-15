const mongoose = require('mongoose')

const grievanceSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
    },
    location:{
        type:String,
        require:true
    },
    grievanceType:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    evidence:{
        type:String,
        
    },
    priority:{
        type:String,
        require:true
    },
    contactMethod:{
        type:String,
        require:true
    },

})

const grievanceData = mongoose.model("grievnaceData",grievanceSchema)
module.exports = grievanceData