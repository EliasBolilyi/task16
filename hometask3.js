var fs = require("fs");
var http = require("http");
var port = 3000;

http.createServer(function(req, res) {
    res.write('data2');
    res.end();
}).listen(port, function() {
	console.log("port");
});