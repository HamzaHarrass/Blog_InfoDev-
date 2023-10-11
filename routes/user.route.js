const express=require('express')
const router=express.Router()
const {authMiddleware,isAuthor}=require('../middleware/authMiddleware')


const {
    getUser,
    getAllUsers,
    deleteUser,
    statusUser,
    updateProfile,
    updateProfilePic
}=require('../controllers/userController')



router.get('/all',getAllUsers);
router.get('/:id',authMiddleware,isAuthor,getUser);
router.delete('/:id',authMiddleware,deleteUser);
router.put('/status/:id',statusUser)
router.post('/:id',authMiddleware,updateProfile)
router.post('/updatePicture',updateProfilePic)


module.exports=router