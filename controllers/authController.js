const express = require('express');
const bcryptjs = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const asyncHandler= require('express-async-handler')

const templetLogin = (req,res)=>{
    res.render('auth')
}

const login = asyncHandler(async (req, res) => {
    console.log(req.body);
    
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Veuillez remplir tous les champs.");
        }

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.status(401).send("Email ou mot de passe incorrect.");
        }

        const passwordMatch = await bcryptjs.compare(password, user.password);

        if (passwordMatch) {
            // Authentication successful, you can manage the user session here if needed
            return res.redirect("/"); // Redirect after successful login
        } else {
            return res.status(401).send("Email ou mot de passe incorrect.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Une erreur s'est produite lors de la connexion.");
    }
});

const register = asyncHandler(async (req, res) => {
    console.log(req.body);

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

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name: name,
                password: hashedPassword,
                email: email,
            },
        });

        res.status(201).redirect("/"); // Redirect after successful registration
    } catch (error) {
        console.error(error);
        return res.status(500).send("Une erreur s'est produite lors de l'inscription.");
    }
});

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
    templetLogin
}




