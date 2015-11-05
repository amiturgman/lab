var http = require('http');
var port = process.env.PORT || 3001;

http.createServer(function(req,res){
	res.end('hello world: ' + new Date().getTime());
}).listen(port, function(){
	console.log('listening on port', port);
});
