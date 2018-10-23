var express = require('express');
var app = express();
var serv = require('http').Server(app);

//Init Express
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
var port = process.env.PORT || 5000;
serv.listen(port, function() {
  console.log('Listening on port ' + port);
});
