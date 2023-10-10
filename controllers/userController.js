const asyncHandler= require('express-async-handler')
//get prisma client
const {PrismaClient}=require('@prisma/client')


const getUser =async (req, res) => {
     let profile={}
    //get user by params id and get from database using prisma orm
     const {id}=req.params
     const prisma=new PrismaClient()
     //get profile with user 
     const user=await prisma.user.findUnique({
          where:{
               id:Number(id)
          }
     })
     const userDetails=await prisma.profile.findUnique({
          where:{
               userId:Number(id)
          }
     })
     
     //check if user is not found
     if(!user){
          res.status(404).json({
               message:"User not found"
          })
     }
     profile.name=user.name
     profile.email=user.email
     //get password from user and dcrypt it
     profile.picture=userDetails.picture
     profile.firstname=userDetails.firstName
     profile.lastname=userDetails.lastName
     profile.phone=userDetails.phone
     profile.info=userDetails.Info
     //if user found then send user data
     console.log(profile)
     res.render('profile',{profile});
};
const getAllUsers = asyncHandler(async (req, res) => {
     const prisma=new PrismaClient()
    try{
        const users=await prisma.user.findMany()
        res.status(200).json({users})
    }catch(error){
            res.status(400).json({msg:error.message})
    }
});
const deleteUser = asyncHandler(async (req, res) => {
     const prisma=new PrismaClient()
    const {id}=req.params 
     validateMongoDbId(id)
     try{
          const deleteUser=await prisma.user.delete({
               where:{
                    id:Number(id)
               }
          })
          res.json({
               deleteUser,
          })
     }catch(error){
          throw new Error(error)
     }
});
const statusUser = asyncHandler(async (req, res) => {
    
});
const updateProfile = asyncHandler(async (req, res) => {
    const {id}=req.user
    const prisma=new PrismaClient()
     try{ 
          const updateUser=await prisma.user.update({
               where:{
                    id:Number(id)
               },
               data:{
                    ...req.body
               }
          })
          //check all fields change old value with new value
          res.status(200).json({msg:'user updated',updateUser})
     }catch(error){
          throw new Error(error.message)
     }
});
const updateProfilePic = asyncHandler(async (req, res) => {
    
     const prisma=new PrismaClient()
     //update file in database

});
const blockUser=asyncHandler(async(req,res)=>{
    const {id}=req.params 
    validateMongoDbId(id)
    try{
        const blockUser=await User.findByIdAndUpdate(
            id,{isBlocked:true},{new:true}
        )
        res.json(blockUser)
    }catch(error){
        throw new Error(error)
    }
})
const unblockUser=asyncHandler(async (req,res)=>{
    const {id}=req.params 
    validateMongoDbId(id)
    try{
         const unblock=await User.findByIdAndUpdate(
              id, 
              {isBlocked:false},
              {new:true}
         )
         res.json({
              message:"User UnBlocked"
         })
    }catch(error){
         throw new Error(error)
    }
})
const updatePicture=asyncHandler(async (req,res)=>{
     const prisma=new PrismaClient()
     try{
         const {url}=req.body 
         const user= prisma.user.update({
                 where:{
                       id:Number(req.params.id)
                 },
                 data:{
                    picture:url
                 }
           })
         res.json(url)
    }catch(err){
         res.status(500).json({message:err.message})
    }
})



module.exports={
    getUser,
    getAllUsers,
    deleteUser,
    statusUser,
    updateProfile,
    updateProfilePic
}