const Job = require("../models/Job")

const getAllJobs = async (req,res)=> {
    try {
        const jobs = await Job.find({})
        res.status(200).json({status:'success', data: jobs})
    } catch (error) {
        res.status(500).json({status:'fail', msg:error})
    }
}

const getJob = async (req,res)=> {
    try {
        const {id: jobID} = req.params
        const job = await Job.findOne({_id:jobID})
        res.status(200).json({status: 'success', data: job})
    } catch (error) {
        res.status(500).json({status:'fail', msg: error})
    }
}

const createJob = async (req,res)=> {
    try {
        const data = req.body
        const newJob = await Job.create(data)
        res.status(201).json({status: 'success', data: newJob})
    } catch (error) {
        res.status(500).json({status:'fail', msg:error})
    }
}

const updateJob = async (req, res)=> {
    try {
        const {id: jobID} = req.params
        const updatedJob = await Job.findOneAndUpdate({_id: jobID}, req.body, {new: true, runValidators:true})
        res.status(200).json({status:'success', data: updatedJob})
    } catch (error) {
        res.status(500).json({status:'fail', msg: error})
    }
}

const removeJob = async (req,res)=> {
    try {
        const {id: jobID} = req.params
        await Job.findOneAndDelete({_id: jobID})
        res.status(200).json({status: 'success', msg: 'JOb removed'})
    } catch (error) {
        res.status(500).json({status:'fail', msg: error})        
    }
}

module.exports = {getAllJobs, getJob, createJob, updateJob, removeJob}