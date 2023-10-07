const express=require('express');
const bodyParser = require('body-parser');
const app = express();

const dotenv=require('dotenv').config()
const authRouter=require('./routes/auth.route')
const articlesRouter=require('./routes/article.route')
const userRouter=require('./routes/user.route')
const path = require('path');
const { engine } = require('express-handlebars');
const { create } = require('express-handlebars');
const hbs = create({ /* config */ });


const { notFound, errorHandler } = require('./middleware/errorHandler')
//const { authMiddleware } = require('./middleware/authMiddleware')
const PORT=process.env.PORT || 4000
// Parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Serve static files from the 'public' directory
app.use('/styles', express.static(path.join(__dirname, 'views', 'public')));
app.use('/uploadImage', express.static(path.join(__dirname, 'views', 'uploadImage')));

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