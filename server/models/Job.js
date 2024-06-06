const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    industry: {
        type:String,
        required: true
    },
    location: {
        type:String,
        default: 'New Delhi'
    }},
    {timestamps: true}
)

const Job = mongoose.model('Job', jobSchema)

module.exports = Job