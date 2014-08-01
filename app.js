var express = require('express');
var bodyParser = require('body-parser');


var indexController = require('./controllers/index.js');
var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/contest')



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Render the homepage
app.get('/', indexController.index);

// // Submit entry is the form, when accessed as a GET
// app.get('/submit-entry', submissionsController.entry);

// // Submit entry is the submitted form when accessed as a POST
app.post('/submission', indexController.submission);


app.get('/viewsubmissions', indexController.viewsubmission);




var server = app.listen(5151, function() {
	console.log('Express server listening on port ' + server.address().port);
});
