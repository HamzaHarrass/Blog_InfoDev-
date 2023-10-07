const asyncHandler= require('express-async-handler')



const createArticle=asyncHandler(async(req,res)=>{

    const { title, image, content, createdAt } = req.body;
    console.log('Received form data:', { title, image, content, createdAt });



}) 
const updateArticle = asyncHandler(async (req, res) => {
    
});
const deleteArticle = asyncHandler(async (req, res) => {
    
});
const getArticle = asyncHandler(async (req, res) => {
    
});
const getAllArticle = asyncHandler(async (req, res) => {
    
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
    res.render('home');
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