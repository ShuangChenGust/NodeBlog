const express = require('express')
const app = express()

//set the view enginee
app.set('view engine', 'ejs')

//set route
app.get('/', (req, res)=>{
    res.render("index");
})

//set port
app.listen(5000)
