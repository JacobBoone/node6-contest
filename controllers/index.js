var Newvideo = require('../models/submission.js')
// var somthing to get require mongo
// push req.body onto it

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
// each new instance of the info entered
	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newVideo = new Newvideo({
		name: req.body.name,
		video: req.body.video, 
		title: req.body.title,
		description: req.body.description

	});
		//  mongoose knows where to save it too on the app.js page
	newVideo.save()

		res.redirect('/viewsubmissions')


	},

// finds info from DB
	viewsubmission: function(req, res){
		Newvideo.find({}, function(err, data){
		res.render('viewsubmissions', {contest: data})

	})
	}

};

module.exports = indexController;