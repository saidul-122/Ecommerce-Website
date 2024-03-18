const jwtToken = require('jsonwebtoken')

const genarateToken =(id)=>{
    return jwtToken.sign({id},process.env.JWT_SECRET,{expiresIn:"6d"})
}

module.exports = genarateToken