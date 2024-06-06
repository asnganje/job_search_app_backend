const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    applicationStatus: {
        type:String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default:'user'
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
