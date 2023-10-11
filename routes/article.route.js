
const express=require('express')
// const bodyParser = require('body-parser')
const router=express.Router()
const {authMiddleware}=require('../middleware/authMiddleware')
const uploadfile = require("../helpers/multer"); // Import the helper function



const {
    createArticle,
    getArticle,
    getAllArticle,
    deleteArticle,
    updateArticle,
    updateStatus,
    home,
    formArticle,
    editArticle,
    addComment,
    Review
}=require('../controllers/articleController')



// router.get('/all',getAllArticle);
router.post('/article/add',authMiddleware,uploadfile,createArticle);
router.get('/article/add',authMiddleware,formArticle);
router.get('/', getAllArticle);
router.get('/article/:name',getArticle);
router.get('/article/edit/:name',authMiddleware,editArticle);
router.post('/article/update',authMiddleware,uploadfile,updateArticle)
router.get('/delete/:id',authMiddleware,deleteArticle)
router.put('/status/:id',updateStatus)
router.post('/addcomment',authMiddleware,addComment )
router.post('/getAllcomment',Review )



module.exports=router