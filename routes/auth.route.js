const express=require('express')
const router=express.Router()


const {
    login,
    register,
    logout,
    forgetPassword,
    resetPassword,
    updatePassword,
}=require('../controllers/authController')


router.get('/logout',logout);
router.post('/register',register);
router.post('/login',login);
router.post('sendResetPasswordCode',resetPassword)
router.post('/changePassword',updatePassword)

module.exports=router