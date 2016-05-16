var connect = require('connect');
var http = require('http');
var app = connect();
var fs = require('fs');

function func1(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	fs.createReadStream('./index.html').pipe(response);
}

function func2(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	fs.createReadStream('./profile.html').pipe(response);	
}

app.use('/welcome',func1);
app.use('/profile',func2);

http.createServer(app).listen(5000);
console.log('Server is running....');
