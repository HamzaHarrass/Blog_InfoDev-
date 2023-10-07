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
        res.status(201).json(createdArticle);
    }catch(error){
        console.log(error);

    }
}); 
const updateArticle = asyncHandler(async (req, res) => {

    
});
const deleteArticle = asyncHandler(async (req, res) => {
    
});
const getArticle = asyncHandler(async (req, res) => {


    
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
    ratingArticle
}