const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient();


const asyncHandler= require('express-async-handler');
const uploadFile = require('../helpers/multer'); // Import the helper function

const createArticle=asyncHandler(async(req,res)=>{
    const { title, content, createdAt } = req.body;
    const imagePath = req.file.filename; // Path to the uploaded file
    console.log('Received form data:', { title ,content, createdAt });

    try{
        const newarticle = {
        title,
        content,
        picture : imagePath,
        published: true,
        authorId :1,
        }
        const createdArticle = await Prisma.Post.create({
            data : newarticle,
        });
        res.redirect('/articles')
    }catch(error){
        console.log(error);

    }
}); 

const editArticle = asyncHandler(async (req,res)=>{
    
    const  articleId = Number(req.params.id)
    const getdataArticle = await Prisma.Post.findUnique({
        where : {
            id : articleId,
        },
    })
    const formattedDate = new Date(getdataArticle.createdAt).toISOString().split('T')[0];

    res.render('editFormArticle', {article: { getdataArticle, formattedDate } })



});
const updateArticle = asyncHandler(async (req, res) => {

    const { id, lastimage, title, content, createdAt } = req.body;
    const imagepath = req.file;
    
    if(!imagepath){
        console.log(imagepath);

    }else{
        console.log({ id, lastimage ,title,  content, createdAt });

    }

try {
    
} catch (error) {
    
}    
});
const deleteArticle = asyncHandler(async (req, res) => {
    
});
const getArticle = asyncHandler(async (req, res) => {

    try {
        const article = await Prisma.Post.findUnique({
            where: {
                id : Number(req.params.id),
            },
            
        });
        // res.status(200).json(article)
        res.render('article' ,  { Article: article })
        // console.log(Article);
        

        
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }



});
const getAllArticle = asyncHandler(async (req, res) => {

    try {
        const articles = await Prisma.Post.findMany();
        // res.status(200).json(articles)
        res.render('home' , {articles});
        
    } catch (error) {
        console.log(error).json(error.message);
        
    }
    
});
const Review = asyncHandler(async (req, res) => {
    
});
const updateStatus = asyncHandler(async (req, res) => {

});
const addComment = asyncHandler(async (req, res) => {
    
});
const deleteComment = asyncHandler(async (req, res) => {
    
});
const ratingArticle = asyncHandler(async (req, res) => {
    
});
const home= (req,res)=>{
    // res.render('home');
}
const formArticle = (req,res)=>{
    res.render('addFormArticle')
}


module.exports={
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle,
    getAllArticle,
    formArticle,
    Review,
    updateStatus,
    home,
    addComment,
    deleteComment,
    ratingArticle,
    editArticle
}