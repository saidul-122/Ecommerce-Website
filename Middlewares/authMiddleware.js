const jwt = require('jsonwebtoken')
const User = require('../Models/userModel')
const authMiddleware =async(req,res,next)=>{
    let token ;
    if(req?.headers?.authorization?.startswith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        if(token){
            const decoded = jwt.sign(token,process.env.JWT_SECRET)
            const user = await User.findById(decoded?._id)
            req.user= user
            next()
        }
    }
}
const isAdmin = async(req,res)=>{
    const {email} = req.body 
    const AdminUser = User.findOne({email})
    if(!AdminUser.role !== "admin"){
        res.json("you are not an Admin!")
    }
    else{
        next()
    }

}

module.exports = authMiddleware