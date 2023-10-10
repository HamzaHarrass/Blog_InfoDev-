
const express=require('express')
// const bodyParser = require('body-parser')
const router=express.Router()
const uploadFile  = require('../helpers/multer'); // Import the helper function


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
router.post('/add',uploadFile,createArticle);
router.get('/form',formArticle);
router.get('/', getAllArticle,);
router.get('/:id',getArticle);
router.get('/edit/:id',editArticle);
router.post('/update',uploadFile,updateArticle)
router.get('/delete/:id',deleteArticle)
router.put('/status/:id',updateStatus)
router.post('/addcomment',addComment )
router.post('/getAllcomment',Review )



module.exports=router