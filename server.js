var koa = require('koa');
var app = koa();

console.log('task :: start web app -');

app.use(function *(){
	console.log('task :: router -');
  this.body = 'Hello World';
});

app.listen(3000,function (){
	console.log('task :: port 30000 -');
});
