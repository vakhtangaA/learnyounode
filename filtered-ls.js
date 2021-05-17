const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
const ext = process.argv[3];

fs.readdir(filePath, "utf8", function cl(err, list) {
	if (err) {
		return console.log(err);
	}
	const filteredByExt = list.filter((item) => {
		return path.extname(item) == "." + ext;
	});

	filteredByExt.forEach((item) => console.log(item));
});
