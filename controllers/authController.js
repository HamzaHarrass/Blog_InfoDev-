const express = require('express');
const bcryptjs = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const asyncHandler= require('express-async-handler')

const login=asyncHandler(async(req,res)=>{
    res.render('auth')
   
}) 

const register=asyncHandler(async(req,res)=>{
    console.log(req.body);

    // console.log(req.body);
        const { name, email, password } = req.body;
    
        if (!name || !password || !email) {
          return res.status(400).send("Veuillez remplir tous les champs.");
        }
    
        try {
          const emailExists = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
    
          if (emailExists) {
            return res.status(400).send("L'email est déjà utilisé.");
          }
    
          const hashedPassword = await bcryptjs.hash(password, 10); // Hash du mot de passe
    
          const newUser = await prisma.user.create({
            data: {
              name: name,
              password: hashedPassword,
              email: email,
            },
          });
    
          res.status(201).redirect("/"); // Redirection après l'inscription réussie
        } catch (error) {
          console.error(error);
          res.status(500).send("Une erreur s'est produite lors de l'inscription.");
        }
}) 

const forgetPassword = asyncHandler(async (req, res) => {
        
});
const resetPassword = asyncHandler(async (req, res) => {
        
});
const updatePassword = asyncHandler(async (req, res) => {
        
});

const logout = asyncHandler(async (req, res) => {
        
});

const refreshToken = asyncHandler(async (req, res) => {
        
});


module.exports={
    login,
    register,
    logout,
    forgetPassword,
    resetPassword,
    updatePassword,
}




