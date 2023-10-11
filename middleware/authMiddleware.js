const { PrismaClient } = require("@prisma/client");
const asyncHandler=require('express-async-handler');
const { Cookie } = require("express-session");
const jwt=require('jsonwebtoken')

const authMiddleware=asyncHandler(async(req,res,next)=>{
     //get data from cookie
    if(req?.cookies?.token){
            try{
                const token=req.cookies.token
                //verify token
                const decoded=jwt.verify(token,process.env.SECRET_KEY_TOKEN)
                //console.log('fucking decoded id')
               // console.log(decoded) 
                //get user from database
                const prisma=new PrismaClient()
                const user=await prisma.user.findUnique({
                    where:{
                        id:Number(decoded.id)
                    }
                })
                //console.log('user from middleware')
                //console.log(user)
                req.user=user
                next()
            }catch(error){
                res.redirect('/')
            }
    }else{
        res.redirect('/')
    }
})

const isAuthor=asyncHandler(async(req,res,next)=>{
     console.log('authoriation middleware')
     if(req.user && (req.user.role==='AUTHOR' 
          || req.user.role==='ADMIN'
          || req.user.id===req.params.id)){
               console.log('suceess')
          next() 
     }else{
          res.status(401)
          throw new Error('Not authorized as an author or user is not authorized to get his own profile')
     }
})

const isEmployee=asyncHandler(async(req,res,next)=>{
     if(req.user && (req.user.role==='admin' || req.user.role==='employee')){
          next() 
     }else{
          res.status(401)
          throw new Error('Not authorized because you are not an employee')
     }
})

const isGood=asyncHandler(async(req,res,next)=>{
     if(req.user && req.user.role==='admin'){
          next() 
     }else{
          res.status(401)
          throw new Error('Not authorized because you are not an good')
     }
})



module.exports={authMiddleware,isAuthor,isGood}