const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
   username:{
        type:String,
        require:true,
   },
   email:{
        type:String,
        require:true,
        unique:true
   },
   password:{
        type:String,
        require:true
   },
   role:{
     type:String,
     default:"user"
   }

})

userSchema.pre("save",async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
module.exports = mongoose.model("User",userSchema)