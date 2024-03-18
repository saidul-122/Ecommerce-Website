const express = require('express')
const authMiddleware = require('../Middlewares/authMiddleware')
const {getAllProducts,postProduct} = require('../Controllers/productController')
const router = express.Router()

router.get('/all_products',authMiddleware,getAllProducts)
router.get('/post_product',authMiddleware,postProduct)

module.exports = router