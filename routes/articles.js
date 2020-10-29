const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('in Articles')
})

router.get('/new', (req, res)=>{
    res.render('articles/new')
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) =>{
    const article = new article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch(e){
        res.render('articles/new', { article: article })
    }
    
})

module.exports = router