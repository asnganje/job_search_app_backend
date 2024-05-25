const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required:true
    },

    status: {
        type: String,
        required: true
    }
})

const Application = mongoose.model('Application', ApplicationSchema)

module.exports = Application;