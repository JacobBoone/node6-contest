// var entries = []

// var Submissions = {
// 	datapush: function(arg){
// 		entries.push(arg)
// 		console.log(entries)

// 	},
// 	database:entries
	
// }

// blueprint / schema - sort of a constructor
var mongoose =require('mongoose');

var Newvideo = mongoose.model('Newvideo',{
	name: String,
	video: String,
	title: String,
	description: String
})






module.exports = Newvideo