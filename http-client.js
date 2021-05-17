const http = require("http");

const url = process.argv[2];

http.get(url, function (res) {
	res.setEncoding("utf8").on("data", function (data) {
		console.log(data);
	});
});
