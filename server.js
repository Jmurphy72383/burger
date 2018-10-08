var express = require('express');
var bodyParser = require('body-parser');
var PORT = 3333 || process.env.PORT;
var app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening on port: " + PORT);
})