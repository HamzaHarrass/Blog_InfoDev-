const express=require('express')
const app=express()
const bodyParser = require('body-parser');

const dotenv=require('dotenv').config()
const authRouter=require('./routes/auth.route')
const articlesRouter=require('./routes/article.route')
const userRouter=require('./routes/user.route')  
const path = require('path');
const cookieParser = require('cookie-parser');
const { engine } = require('express-handlebars');
const { create } = require('express-handlebars');
const hbs = create({ /* config */ });
const session = require('express-session'); 
const flash = require('express-flash');

 
 // Set up flash messages middleware
 
   
const { notFound, errorHandler } = require('./middleware/errorHandler')
//const { authMiddleware } = require('./middleware/authMiddleware')
const PORT=process.env.PORT || 4000

app.use('/styles', express.static(path.join(__dirname, 'views', 'public')));
app.use('/uploadImage', express.static(path.join(__dirname, 'views', 'uploadImage')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//app.set on general is using for set the view engine and views folder(in other word is using for set the template engine)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(session({
     secret: 'your-secret-key',
     resave: false,
     saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next)=>{
     res.locals.ms_success = req.flash('success')
     res.locals.ms_error = req.flash('error')
     // res.locals.error= req.flash('error')
     next()
 })

app.use('/auth',authRouter)
app.use('/',articlesRouter)
app.use('/profile',userRouter)

app.use(express.static(path.join(__dirname, "views/public")));



//this is for not found
//app.use(notFound)
//this is for error handler 
//app.use(errorHandler)

app.listen(PORT,()=>{
     console.log(`Server is running on port ${PORT}`)
})