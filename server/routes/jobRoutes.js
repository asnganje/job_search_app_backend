const express = require('express')
const router = express.Router()
const { getAllJobs, 
        getJob, 
        createJob, 
        updateJob, 
        removeJob} = require('../controllers/jobsController') 

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').patch(updateJob).delete(removeJob)
router.route('/search').get(getJob)
module.exports = router