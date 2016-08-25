// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var bodyParser = require('body-parser'); 

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
	return {
		// notice how index in the factory(client side) is calling the index method(server side)
	    index: function(req, res) {
	    	Friend.find({}, function(err, results){
	    		err ? console.log(err) : res.json(results);
	    	});
	    },
	    create: function(req, res){
	    	new Friend(req.body).save(function(err){
	    		if (err) throw err;
	    		res.json({});
	    	});
	    },
	    delete: function(req, res){
	    	Friend.find({_id: req.params.id}).remove(function(err){
	    		if (err) throw err;
	    		res.json({});
	    	});
	    }
	}
})();