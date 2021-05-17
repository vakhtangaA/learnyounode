const myMod = require("./mymodule.js");

const filePath = process.argv[2];
const ext = process.argv[3];

myMod(filePath, ext, function (err, data) {
	if (err) {
		return console.log(err);
	}
	data.forEach((item) => console.log(item));
});
