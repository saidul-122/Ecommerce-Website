const User = require('../Models/userModel')
const asyncHandler = require('express-async-handler')
const genarateToken = require('../config/jwtToken')
//creating user
const createUser = async (req, res) => {
    const email = req.body.email
    const existUser = await User.findOne({email})
    if (!existUser) {
        const newUser = User.create(req.body);
        res.status(200).json("user created")

    } else {
        res.json("user already exist")
    }
    
}

//login user
const loginUser =asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const existUser =await User.findOne({email})
    if (existUser && await existUser.isPasswordMatched(password)){
        res.json({
            _id:existUser?._id,
            username:existUser?.username,
            email:existUser?.email,
            token : genarateToken(existUser?._id)
        })
    }
    else{
        res.json("credential mismatch!")
    }
})

//get all users
const getAllUsers =asyncHandler(async(req,res)=>{
    const users = await User.find()
    if(users){
        res.json(users)
    }
    else{
        res.json("no users found")
    }

})

const getUserById =asyncHandler(async(req,res)=>{
    const {id} = req.params 
    const user = await User.findById(id)
    if(user){
        res.json({user})
    }
    else{
        res.status(400).json("no user found")
    }
})

const deleteUserById = asyncHandler(async(req,res)=>{
    const {id}= req.params
    const deletedUser = await User.findByIdAndDelete(id)
    if(deletedUser){
        res.json(deletedUser)
    }
    else{
        res.status(400).json("user not found")
    }
})

module.exports = {createUser,loginUser,getAllUsers,getUserById,deleteUserById}