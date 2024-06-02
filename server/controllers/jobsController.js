const Job = require("../models/Job")

const getAllJobs = async (req,res)=> {
        const jobs = await Job.find({})
        res.status(200).json({status:'success', data: jobs})
}

const getJob = async (req,res)=> {
        const {id: jobID} = req.params
        const job = await Job.findOne({_id:jobID})
        if(!job){
            return res.status(500).json({msg: `No job with id: ${jobID} `})
        }
        res.status(200).json({status: 'success', data: job})
}

const createJob = async (req,res)=> {
        const data = req.body
        const newJob = await Job.create(data)
        res.status(201).json({status: 'success', data: newJob})
}

const updateJob = async (req, res)=> {
        const {id: jobID} = req.params
        const updatedJob = await Job.findOneAndUpdate({_id: jobID}, req.body, {new: true, runValidators:true})
        if (!updatedJob) {
            return res.status(500).json({msg: `No job with id: ${jobID}`})
        }
        
        res.status(200).json({status:'success', data: updatedJob})
}

const removeJob = async (req,res)=> {
        const {id: jobID} = req.params
        const job = await Job.findOneAndDelete({_id: jobID})
        if (!job) {
            return res.status(500).json({msg:`No job with id: ${jobID}`})
        }
        res.status(200).json({status: 'success', msg: 'The job has been removed'})
}

module.exports = {getAllJobs, getJob, createJob, updateJob, removeJob}