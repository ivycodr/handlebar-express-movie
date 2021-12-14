// organizes routes
const express = require('express');
const mainroutes = express.Router();
const {Movie} = require('./models/movie');
//const {Cast} = require('./models/cast');
//const {Crew} = require('./models/crew');


mainroutes.get('/web/movies', async (req, res) => {
    const movies = await Movie.findAll()
    res.render('movies', { movies })
})


module.exports = mainroutes;