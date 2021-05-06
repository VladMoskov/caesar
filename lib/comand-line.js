const {Command} = require('commander');
const fs = require('fs');
const {makeShift} = require('./common');
const path = require('path');

const program = new Command();
const options = program
    .option('-s, --shift <number>')
    .option('-i, --input <string>')
    .option('-o, --output <string>')
    .option('-a, --action <string>')
    .parse(process.argv)
    .opts();

let input;
let output;

if (options.input) {
    if (fs.existsSync(path.join(__dirname, '../', options.input))) {
        input = path.join(__dirname, '../', options.input)
    } else {
        console.error('Input file is not exist')
        process.exit(1)
    }
} else {
    input = undefined
}

if (options.output) {
    if (fs.existsSync(path.join(__dirname, '../', options.output))) {
        output = path.join(__dirname, '../', options.output)
    } else {
        console.error('Output file is not exist')
        process.exit(1)
    }
} else {
    output = undefined
}


if (!options.shift || !options.action) {
    console.error("Options '-s/--shift' and '-a/--action' are required");
    process.exit(1);
}

if (options.action !== 'encode' && options.action !== 'decode') {
    console.error("Action must be 'encode' or 'decode'");
    process.exit(1);
}


exports.action = options.action;
exports.shift = makeShift(+options.shift);

exports.input = input
exports.output = output
