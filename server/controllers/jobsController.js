const Job = require("../models/Job")

const getAllJobs = async (req,res)=> {
    try {
        const jobs = await Job.find({})
        res.status(200).json({status:'success', data: jobs})
    } catch (error) {
        res.status(500).json({status:'fail', msg:error})
    }
}

const getJob = (req,res)=> {
    res.send('Get a single job')
}

const createJob = async (req,res)=> {
    try {
        const data = req.body
        console.log(data);
        const newJob = await Job.create(data)
        res.status(201).json({status: 'success', data: newJob})
    } catch (error) {
        res.status(500).json({status:'fail', msg:error})
    }
}

const updateJob = (req, res)=> {
    res.send('Update a job')
}

const removeJob = (req,res)=> {
    res.send('Remove a job')
}

module.exports = {getAllJobs, getJob, createJob, updateJob, removeJob}