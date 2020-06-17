const express = require('express')
const app = express();

const path = require('path')
const hbs = require('hbs')

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicPath = path.join(__dirname, '../public')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: "Home"
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: "About"
    })
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("App is running!")
})