const express=require('express')
const router=express.Router()


const {
    getUser,
    getAllUsers,
    deleteUser,
    statusUser,
    updateProfile,
    updateProfilePic
}=require('../controllers/userController')



router.get('/all',getAllUsers);
router.get('/:id',getUser);
router.delete('/:id',deleteUser)
router.put('/status/:id',statusUser)
router.put('/profile/:id',updateProfile)
router.post('/updatePicture',updateProfilePic)


module.exports=router