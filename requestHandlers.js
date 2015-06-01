
function start(response) {
	console.log("Request handler 'start' was called.");

	/*var sleep = function (milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds) {
			var xx = new Date().getTime();	
			console.log (xx);
		};
	}

	
	var sleepReal = function (options, callback) {
			console.log (options);
			callback (options);
	}
	*/

	var titulo="";

	var TT = function(){
				titulo = "Testing Delay";
				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write(titulo);
				response.end();
				console.log ("testing timeout");
	}	

	setTimeout(TT, 10000);

	//sleepReal(20000, sleep);

	
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;