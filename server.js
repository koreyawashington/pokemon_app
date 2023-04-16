const express = require('express')
const app = express()
const PORT = 3000
const pokemon  = require('./models/pokemon.js')

//This is the server running at PORT 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  })

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

//The json is showing in the browser
app.get('/pokemon', (req, res) => {
    res.send({pokemon})
    res.render('index.jsx')
  })
  
