const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    JobStatus: {
        type:String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    JobType: {
        type:String,
        enum: ['full-time', 'part-time', 'internship'],
        default: 'full-time'
    },
    jobLocation: {
        type:String,
        default: 'New Delhi'
    }},
    {timestamps: true}
)

const Job = mongoose.model('Job', jobSchema)

module.exports = Job