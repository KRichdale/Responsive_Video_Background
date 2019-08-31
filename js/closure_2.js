function serverRequest(query, callback) {
	setTimeout(function() {
		var response = query + 'full!';
		callback(response);
	}, 3000);
	let i = 0;
	setInterval(function() {
		if (i <= 10) {
			i++;
		} else {
			return (i = 0);
		}

		console.log(i);
	}, 1000);
}

function getResults(results) {
	console.log('Response from the server: ' + results);
}
serverRequest('Loading ', getResults);

let vid = document.getElementById('videoBG');

vid.playbackRate = 0.8;
