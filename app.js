const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express();

app.engine('handlebars', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', 'handlebars');


// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: true }));
// support the parsing of incoming requests with json payloads
app.use(express.json());

// serve static assets from the public/ folder
app.use(express.static('public'));



const mainroutes = require('./routes')
// Import my routes into the path '/'
app.use('/', mainroutes);


module.exports = app;