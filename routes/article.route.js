
const express=require('express')
const router=express.Router()


const {
    getArticle,
    getAllArticle,
    deleteArticle,
    updateArticle,
    updateStatus,
    home
}=require('../controllers/articleController')



router.get('/all',getAllArticle);
router.get('/', home);
router.get('/:id',getArticle);
router.delete('/delete/:id',deleteArticle)
router.put('/update/:id',updateArticle)
router.put('/status/:id',updateStatus)


module.exports=router