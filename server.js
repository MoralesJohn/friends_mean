// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// set up a static file server that points to the "client" directory
app.listen(8000, function() {
	console.log('Mean friends listening on: 8000');
});