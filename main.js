var http = require('http');
var fs = require('fs');

function not404found(response){
	response.writeHead(404,{"Context-Type":"text/html"});
	fs.createReadStream('./notfound.html').pipe(response);
}

function onRequest(request,response){
	console.log('A user made a request');
	if (request.method=='GET' && request.url=='/'){
		response.writeHead(200,{"Context-Type":"text/html"});
		fs.createReadStream('./index.html').pipe(response);
	}
	else not404found(response);
}

http.createServer(onRequest).listen(5000);
console.log('Server is Running.....');
