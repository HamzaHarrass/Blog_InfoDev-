
const express=require('express')
// const bodyParser = require('body-parser')
const router=express.Router()
const {authMiddleware,isAuthor}=require('../middleware/authMiddleware')
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
    deleteComment,
    editArticle,
    addComment,
    Review
}=require('../controllers/articleController')



// router.get('/all',getAllArticle);
router.post('/article/add',authMiddleware,uploadfile,createArticle);
router.get('/article/add',authMiddleware,formArticle);
router.get('/', getAllArticle);
router.get('/article/:name',getArticle);
router.get('/article/edit/:name',authMiddleware,isAuthor,editArticle);
router.post('/article/update',authMiddleware,isAuthor,uploadfile,updateArticle)
router.get('/delete/:id',authMiddleware,deleteArticle)
router.put('/status/:id',updateStatus)
router.get('/removecomment/:id',deleteComment)
router.post('/addcomment',authMiddleware,addComment)
router.post('/getAllcomment',Review )



module.exports=router