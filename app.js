const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const characters = require('./data/characters.json')

console.log(characters)

app.use(express.static('public'))

app.set('views', './views/pages')
app.set('view engine', 'ejs')

app.get('/', (req, resp) => {
  resp.render('home', { characters })
})

app.get('/personajes/rick-sanchez', (req, resp) => {
  resp.render('character', { character: characters[0] })
})

app.get('/personajes/morty-smith', (req, resp) => {
  resp.render('character', { character: characters[1] })
})

app.get('/personajes/summer-smith', (req, resp) => {
  resp.render('character', { character: characters[2] })
})

app.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})