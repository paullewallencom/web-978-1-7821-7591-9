var http = require('http');
var static = require('node-static');
var fileServer = new static.Server('./public');
   http.createServer(function (req, res) {
     fileServer.serve(req,res);
   }).listen(8080, 'localhost');
   console.log('Server running at http://localhost:8080');
