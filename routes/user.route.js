const express=require('express')
const router=express.Router()
const {authMiddleware,isAuthor}=require('../middleware/authMiddleware')
const uploadfile = require("../helpers/multer"); // Import the helper function


const {
    getUser,
    getAllUsers,
    deleteUser,
    statusUser,
    updateProfile,
    updateProfilePic
}=require('../controllers/userController')



router.get('/all',getAllUsers);
router.post('/updatePicture',authMiddleware,uploadfile,updateProfilePic)
router.get('/',authMiddleware,getUser);
router.delete('/:id',authMiddleware,deleteUser);
router.put('/status/:id',statusUser)
router.post('/',authMiddleware,updateProfile)



module.exports=router