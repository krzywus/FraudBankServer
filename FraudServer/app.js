var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/index.html" );
});
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/index.html" );
});

var http = require('http');
var port = 44366;
console.log("Server running on port " + port);
http.createServer(app).listen(port);






