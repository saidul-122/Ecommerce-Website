const express = require("express")
const dbConnect = require('./config/dbConfig')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoute = require('./Routes/authRoute')
const productRoute = require('./Routes/productRoute')



const app = express()
dotenv.config()

dbConnect()
app.use(express.json())
app.use(cors())


app.use('/api/user',authRoute)
app.use('api/product',productRoute)
app.get('/',(req,res)=>{
    res.json("...")
})

app.listen(4000,(req,res)=>{
    console.log("server is running 4000");
})