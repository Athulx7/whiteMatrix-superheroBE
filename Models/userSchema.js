const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'superhero'],
        default: 'user'
    },
    registrationDate: {
        type: Date,
        default: Date.now, 
    },
})

const users = mongoose.model('users', userSchema)

module.exports = users