const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const productSchema = mongoose.Schema({
    course_name:{
        type:String,
        require:true

    },
    course_desc:{
        type:String,
        require:true
    },
    course_pic :{
        type:String,
        require:true
    },
    postedBy:{
        type: ObjectId,
        ref: "User"
    }
     
},{
    timestamps: true
})

module.exports = mongoose.model("Product",productSchema)