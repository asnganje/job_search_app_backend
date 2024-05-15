const getAllApplications = (req,res)=> {
    res.send('Get all Applications')
}

const getApplication = (req,res)=> {
    res.send('Get a single Application')
}

const createApplication = (req,res)=> {
    
}

const updateApplication = (req, res)=> {
    res.send('Update an Application')
}

const removeApplication = (req,res)=> {
    res.send('Remove an Application')
}

module.exports = {getAllApplications, getApplication, createApplication, updateApplication, removeApplication}