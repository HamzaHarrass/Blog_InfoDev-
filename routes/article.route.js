
const express=require('express')
// const bodyParser = require('body-parser')
const router=express.Router()


const {
    createArticle,
    getArticle,
    getAllArticle,
    deleteArticle,
    updateArticle,
    updateStatus,
    home,
    formArticle
}=require('../controllers/articleController')



router.get('/all',getAllArticle);
router.post('/add',createArticle);
router.get('/form',formArticle);
router.get('/', home);
router.get('/:id',getArticle);
router.delete('/delete/:id',deleteArticle)
router.put('/update/:id',updateArticle)
router.put('/status/:id',updateStatus)


module.exports=router