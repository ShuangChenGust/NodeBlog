const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()
const Article = require('./models/articles')
const methodOverride = require('method-override')


// mongoose.set('useCreateIndex', true)
//connect to database
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

//set the view enginee
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false}))
app.use(methodOverride('_method'))


//set route
app.get('/', async (req, res)=>{
    const articles = await Article.find().sort({
        createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
})

//Set the router folder;
app.use('/articles', articleRouter)

//set port
app.listen(5000)
