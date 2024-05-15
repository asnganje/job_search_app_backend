const express = require('express')
const router = express.Router()
const { getAllJobs, 
        getJob, 
        createJob, 
        updateJob, 
        removeJob} = require('../controllers/jobsController') 

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(updateJob).delete(removeJob)
module.exports = router