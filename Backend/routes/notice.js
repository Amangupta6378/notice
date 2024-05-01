const express = require('express');
const router = express.Router();

const {signup, login, getUser, deleteUser} = require('../controller/Auth')

const {auth, isStudent, isCoordinator} = require('../middleware/auth')

router.post('/signup', signup)
router.post('/login', login)
router.get('/getusers', getUser)
router.delete('/deleteUser', deleteUser)

//testing routes 
router.get('/test', auth,(req,res)=>{
    res.json({
        success: true,
        message:"Welcome to the protected route for Test."
    })
})

// Protected Routes
router.get('/student', auth, isStudent,(req,res)=>{
    res.json({
        success: true,
        message:"Welcome to the protected route for Student."
    })
})

router.get('/teacher', auth, isCoordinator,(req,res)=>{
    res.json({
        success: true,
        message:"Welcome to the protected route for Coordinator."
    })
})

module.exports = router;