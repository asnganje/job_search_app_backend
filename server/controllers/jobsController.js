const getAllJobs = (req,res)=> {
    res.send('Get all jobs')
}

const getJob = (req,res)=> {
    res.send('Get a single job')
}

const createJob = (req,res)=> {
    res.send('Create a job')
}

const updateJob = (req, res)=> {
    res.send('Update a job')
}

const removeJob = (req,res)=> {
    res.send('Remove a job')
}

module.exports = {getAllJobs, getJob, createJob, updateJob, removeJob}