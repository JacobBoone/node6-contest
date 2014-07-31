// var somthing to get require mongo
// push req.body onto it

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	submission: function(req, res){
		console.log('from app.js', req.body);
		// push onto mongo from here
	}

};

module.exports = indexController;