const express = require('express')
const router = express.Router()
const {
    getAllApplications,
    getApplication,
    createApplication,
    updateApplication,
    removeApplication
    } = require('../controllers/applicationsController')

router.route('/').get(getAllApplications).post(createApplication)
router.route('/:id').get(getApplication).patch(updateApplication).delete(removeApplication)

module.exports = router