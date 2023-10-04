const express=require('express')
const app=express()

const dotenv=require('dotenv').config()
const authRouter=require('./routes/auth.route')
const articlesRouter=require('./routes/article.route')
const userRouter=require('./routes/user.route')
const { engine } = require('express-handlebars');
const { create } = require('express-handlebars');
const hbs = create({ /* config */ });


const { notFound, errorHandler } = require('./middleware/errorHandler')
//const { authMiddleware } = require('./middleware/authMiddleware')
const PORT=process.env.PORT || 4000




app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use('/auth',authRouter)
app.use('/articles',articlesRouter)
app.use('/user',userRouter)




//this is for not found
//app.use(notFound)
//this is for error handler 
//app.use(errorHandler)

app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
})