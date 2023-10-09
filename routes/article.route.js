
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
router.post('/add',createArticle);
router.get('/form',formArticle);
router.get('/', getAllArticle,);
router.get('/:id',getArticle,Review);
router.get('/edit/:id',editArticle);
router.post('/update',updateArticle)
router.get('/delete/:id',deleteArticle)
router.put('/status/:id',updateStatus)
router.post('/addcomment',addComment )
router.post('/getAllcomment',Review )



module.exports=router