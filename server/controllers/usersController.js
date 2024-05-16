const User = require("../models/User")

const getAllUsers = async (req,res)=> {
    try {
        const users = await User.find({})
        res.status(200).json({status:'success', data: users})
    } catch (error) {
        res.status(500).json({status:'fail', msg: error})
    }
}

const getUser = async (req,res)=> {
    try {
        const {id: userID} = req.params
        const user = await User.findOne({_id: userID})
        res.status(200).json({status: 'success', data: user})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }

}

const createUser = async (req,res)=> {
    try {
        const user = req.body
        const newUser = await User.create(user)
        res.status(201).json({status:'success', data: newUser})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

const updateUser = async (req, res)=> {
    try {
        const {id: userID} = req.params
        const updatedUser = await User.findOneAndUpdate({_id: userID}, req.body, {new: true, runValidators: true})
        res.status(200).json({status: 'success', data: updatedUser})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

const removeUser = async (req,res)=> {
    try {
        const {id: userID} = req.params
        await User.findOneAndDelete({_id: userID})
        res.status(200).json({status: 'success', msg: 'User deleted successfully'})
    } catch (error) {
        res.status(500).json({status: 'fail', msg: error})
    }
}

module.exports = {getAllUsers, getUser, createUser, updateUser, removeUser}