const getAllUsers = (req,res)=> {
    res.send('Get all Users')
}

const getUser = (req,res)=> {
    res.send('Get a single User')
}

const createUser = (req,res)=> {
    res.send('Create a User')
}

const updateUser = (req, res)=> {
    res.send('Update a User')
}

const removeUser = (req,res)=> {
    res.send('Remove a User')
}

module.exports = {getAllUsers, getUser, createUser, updateUser, removeUser}