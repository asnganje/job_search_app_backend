const Application = require("../models/Application")


const getAllApplications = async (req,res)=> {
    try {
        const allApplications = await Application.find({})
        res.status(200).json({status: 'success', msg: allApplications })
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

const getApplication = async (req,res)=> {
    const {id: applicationID} = req.params
    try {
        const singleApplication = await Application.findOne({_id: applicationID})
        res.status(200).json({status: 'success', data: singleApplication})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

const createApplication = async (req,res)=> {
    try {
        const data = req.body
        const newApplication = await Application.create(data)
        res.status(201).json({status: 'success', msg: newApplication})
    } catch (error) {
        res.status(500).json({status: 'fails', msg: error})
    }
}

const updateApplication = async (req, res)=> {
    try {
        const {id: applicationID} = req.params
        const updatedApplication = await Application.findOneAndUpdate({_id:applicationID}, req.body, {new: true, runValidators: true})
        res.status(200).json({status: 'success', data: updatedApplication})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

const removeApplication = async (req,res)=> {
    try {
        const {id: applicationID} = req.params
        await Application.findOneAndDelete({_id: applicationID})
        res.status(200).json({status: 'success', msg: 'Successfully deleted!'})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

module.exports = {getAllApplications, getApplication, createApplication, updateApplication, removeApplication}