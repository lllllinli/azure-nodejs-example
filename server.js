var express = require('express');
var app = express();

app.get('/', function (req, res) {

  console.log('port:',port);
  res.send('<h1>Hello PORT:</h1>');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
