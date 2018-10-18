var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

// INITIALIZE THE GIPHY-API LIBRARY
var giphy = require('giphy-api')();
app.get('/', function (req, res) {
  let defaultSearch = req.query.term || "trending"
  giphy.search(defaultSearch, function (err, response) {
    res.render('home', {gifs: response.data})
  });
});


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});