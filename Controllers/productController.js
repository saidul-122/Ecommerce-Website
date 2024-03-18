const Product = require('../Models/productModel')
const getAllProducts =async(req,res)=>{
    const products = await Product.find()
    if(products){
        res.json(products)
    }
    else{
        res.json("No products found!")
    }
}

const postProduct=async()=>{
    const {  course_name,course_desc, course_pic } = req.body;
    if (!course_name || !course_desc || ! course_pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    console.log(req.user)
    
    const product = new Product({
        course_name :course_name,
        course_desc : course_desc,
        course_pic:course_pic,
        postedBy: req.user
    })
    Post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
}

module.exports = {getAllProducts,postProduct}