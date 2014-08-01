var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var Newvideo = require('./models/submission.js')

var indexController = require('./controllers/index.js');

// mongoose saves it in contest DB
mongoose.connect('mongodb://localhost/contest')



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


// // displays a list of videos?
// app.get('/submission', function(req, res){
// 	Newvideo.find({}, function(err, data){
// 		res.render('contest', {contest: data})

// 	})
	
// });



// 1 is where i want it, 2 is what i want happen on the page from the function viewsubmisson on the indexcontroller

app.get('/viewsubmissions', indexController.viewsubmission);




var server = app.listen(5151, function() {
	console.log('Express server listening on port ' + server.address().port);
});
