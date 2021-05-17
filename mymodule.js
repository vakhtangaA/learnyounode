const fs = require("fs");
const path = require("path");

module.exports = function readFile(filePath, ext, cl) {
	ext = "." + ext;
	fs.readdir(filePath, function (err, data) {
		if (err) return cl(err);
		const filteredByExt = data.filter((item) => {
			return path.extname(item) == ext;
		});

		return cl(err, filteredByExt);
	});
};
