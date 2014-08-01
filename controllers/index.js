var something = require('../models/submission.js')
// var somthing to get require mongo
// push req.body onto it

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	submission: function(req, res){
		// console.log('from index.js', req.body);

		something.datapush(req.body)
			// $('req.body.description').text().replace('watch?v=','embed/');
		// res.send(req.body)
		res.redirect('/viewsubmissions')
		

	},

	viewsubmission: function(req, res){
		res.render('viewsubmissions', {database: something.database})

	}

};

module.exports = indexController;