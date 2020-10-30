const express = require('express')
const Article = require('./../models/articles')

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('in Articles')
})

router.get('/new', (req, res)=>{
    res.render('articles/new', { article: new Article() })
})

router.get('/:slug', async (req, res) => {
    const article = await Article.findOne( {slug:req.params.id})
    if(article == null) res.redirect('/')
    res.render('articles/show', { article: article })
})
// router.get('/:id', (req, res) => {
//     res.send(req.params.id)
// })



router.post('/', async (req, res) =>{
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
        article = await article.save()
        res.redirect(`/articles/${article.slug}`)
    } catch(e){
        console.log(e)
        res.render('articles/new', { article: article })
    }
    
})


//we have to use new npm library method-override to delete, since we can only have get and post in method
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router