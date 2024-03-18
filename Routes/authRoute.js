const express = require('express')
const {createUser,loginUser, getAllUsers, getUserById, deleteUserById} = require('../Controllers/authController')
const router = express.Router()

router.post('/register',createUser)
router.post('/login',loginUser)
router.get('/getAllUsers',getAllUsers)
router.get('/getUserById/:id',getUserById)
router.get('/deleteUserById/:id',deleteUserById)
module.exports = router