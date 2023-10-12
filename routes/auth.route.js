const express=require('express')
const router=express.Router()


const {
    login,
    register,
    logout,
    forgetPassword,
    resetPassword,
    updatePassword,
    templetLogin
}=require('../controllers/authController')


router.get('/logout',logout);
router.post('/register',register);
router.get('/login', templetLogin);
router.post('/login',login);
router.get('/reset-password', resetPassword);
router.post('/changePassword',updatePassword)

module.exports=router