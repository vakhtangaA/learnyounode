const fs = require("fs");
const filePath = process.argv[2];
const fileBuffer = fs.readFileSync(filePath);
const fileInString = fileBuffer.toString();

const arrayOfLines = fileInString.split("\n");

console.log(arrayOfLines.length - 1);
