const Job = require("../models/Job")
const {StatusCodes} = require('http-status-codes')

const getAllJobs = async (req,res)=> {
        const jobs = await Job.find({})
        res.status(StatusCodes.OK).json({status:'success', data: jobs})
}

const getJob = async (req,res)=> {
        const {title, industry, location} = req.query

        if (!title && !industry && !location) {
                return res.status(StatusCodes.BAD_REQUEST).json({status: 'fail', msg:'Please provide at least one search term'} )
        }

        let query={};
        if (title) {
                query.title = title
        }
        
        if(industry) {
                query.industry = industry
        } 
        if(location) {
                query.location = location
        }
        const jobs = await Job.find(query)
        if(jobs.length === 0){
                return res.status(500).json({msg: `No jobs matching the criteria`})
        }
        res.status(StatusCodes.OK).json({status: 'success', data: jobs})
}

const createJob = async (req,res)=> {
        const data = req.body
        const newJob = await Job.create(data)
        res.status(StatusCodes.CREATED).json({status: 'success', data: newJob})
}

const updateJob = async (req, res)=> {
        const {id: jobID} = req.params
        const updatedJob = await Job.findOneAndUpdate({_id: jobID}, req.body, {new: true, runValidators:true})
        if (!updatedJob) {
            return res.status(500).json({msg: `No job with id: ${jobID}`})
        }
        
        res.status(StatusCodes.OK).json({status:'success', data: updatedJob})
}

const removeJob = async (req,res)=> {
        const {id: jobID} = req.params
        const job = await Job.findOneAndDelete({_id: jobID})
        if (!job) {
            return res.status(500).json({msg:`No job with id: ${jobID}`})
        }
        res.status(StatusCodes.OK).json({status: 'success', msg: 'The job has been removed'})
}

module.exports = {getAllJobs, getJob, createJob, updateJob, removeJob}