var http = require("http");
var url = require("url");

function start(route, handle) {

	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;

		//if (request.url === '/favicon.ico') {
		//		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		//		response.end();
		//		console.log('favicon requested');
		//		return;
		//}

		
		console.log("Request Url " + request.url);
		console.log("Request for " + pathname + " received.");	
		route(handle, pathname, response);
		
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;