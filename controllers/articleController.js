const asyncHandler= require('express-async-handler')

const createArticle=asyncHandler(async(req,res)=>{
    
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
const home= (req,res)=>{
    res.render('home');
}


module.exports={
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle,
    getAllArticle,
    Review,
    updateStatus,
    home,
}