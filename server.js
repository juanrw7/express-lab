// import modules

import express from "express"

import { songs } from "./data/songs-data.js"

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes


app.get('/', function(req, res) {
  res.send('<h1>hello again</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/music', function(req, res) {
  res.redirect('/songs')
})

app.get('/songs', function(req, res) {
  res.render('songs/index', {
    songs: songs
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})