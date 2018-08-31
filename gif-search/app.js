var express = require('express');
var app = express();

// INITIALIZE THE GIPHY-API LIBRARY
var giphy = require('giphy-api')();
app.get('/', function (req, res) {
  let defaultSearch = req.query.term || "puppy"
  giphy.search(defaultSearch, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
