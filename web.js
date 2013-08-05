var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var infile = "index.html";
var text = fs.readFileSync(infile, 'utf8');
var buffer = new Buffer(text);

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
