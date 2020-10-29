const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

//connect to database
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//set the view enginee
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false}))



//set route
app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Test Description2'
    }]
    res.render('articles/index', { articles: articles })
})

//Set the router folder;
app.use('/articles', articleRouter)

//set port
app.listen(5000)
