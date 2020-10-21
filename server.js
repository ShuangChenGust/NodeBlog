const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

//set the view enginee
app.set('view engine', 'ejs')

//Set the router folder;
app.use('/articles', articleRouter)

//set route
app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test Description'
    },
    {
        title: 'Test Article2',
        createdAt: Date.now(),
        description: 'Test Description2'
    }]
    res.render('index', { articles: articles })
})

//set port
app.listen(5000)
