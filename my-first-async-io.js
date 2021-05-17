const fs = require("fs");
const filePath = process.argv[2];

function cb(err, data) {
	if (err) {
		return console.log(err);
	}

	console.log(data.split("\n").length - 1);
}

fs.readFile(filePath, "utf8", cb);
