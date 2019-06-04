var http=require('http');   // module
//object----- model


var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(hello.world));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");
