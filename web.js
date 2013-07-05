var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var infile = "index.html";
var buffer = new Buffer(256);
var text = fs.readFileSync(infile, 'utf8');
len = buffer.write(text, 0);

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
