const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/config');

const app = express();

app
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use(express.static('angular-client'))

app.get('/getMovies', function (req, res) {
  db.Movies.findAll()
  .then(movies => res.send(movies))
  .catch(error => res.send(error))
})

app.post('/addMovie', function (req, res) {
  console.log('req from server: ', req.body)
  db.Movies.create({
    title: req.body.title,
    numOfCopies: req.body.numOfCopies,
    IMDB_Rating: req.body.IMDB_Rating
  })
  .then(movies => res.send(movies))
  .catch(error => res.send(error))
})

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
