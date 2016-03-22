// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('You have reached the default node.js application at index.js! [defaultdocument sample]');
// }).listen(process.env.PORT);
// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);

var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World - koa js';
});

app.listen(process.env.PORT || 3000);
