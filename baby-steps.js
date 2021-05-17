"use strict";

const process_argv = process.argv;
const spliced_argv = process_argv.splice(2);

let sum = 0;

spliced_argv.forEach((item) => {
	sum += Number(item);
});

console.log(sum);
