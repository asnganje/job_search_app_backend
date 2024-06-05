const User = require("../models/User")
const {StatusCodes} = require('http-status-codes')

// const getAllUsers = async (req,res)=> {
//         const users = await User.find({})
//         res.status(StatusCodes.OK).json({status:'success', data: users})
// }

// const getUser = async (req,res)=> {
//         const {id: userID} = req.params
//         const user = await User.findOne({_id: userID})
//         res.status(StatusCodes.OK).json({status: 'success', data: user})
// }

const register = async (req,res)=> {
        const user = req.body
        const isFirst = await User.countDocuments() === 0;
        user.role = isFirst? 'admin': 'user'
        const newUser = await User.create(user)
        res.status(StatusCodes.CREATED).json({status:'success', data: newUser})
}

const login = async (req, res) => {
    const {email, password} = req.body
    const user = User.findOne({email, password})
    res.status(StatusCodes.OK).json({status: 'success', data: user})
}

// const updateUser = async (req, res)=> {
//         const {id: userID} = req.params
//         const updatedUser = await User.findOneAndUpdate({_id: userID}, req.body, {new: true, runValidators: true})
//         res.status(StatusCodes.OK).json({status: 'success', data: updatedUser})
// }

// const removeUser = async (req,res)=> {
//         const {id: userID} = req.params
//         await User.findOneAndDelete({_id: userID})
//         res.status(StatusCodes.OK).json({status: 'success', msg: 'User deleted successfully'})
// }

module.exports = { register, login}