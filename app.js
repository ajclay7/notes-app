const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.bold.inverse.blue('Success!');
console.log(greenMsg);
