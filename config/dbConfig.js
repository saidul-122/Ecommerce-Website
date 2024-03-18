const mongoose = require("mongoose")

const dbConnect=()=>{
    try {
        mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("database connected")
        }).catch((err) => {
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}


module.exports = dbConnect