var http = require('http');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = '3000';
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
console.log('Server running at http://'+hostname+':'+port);
 
