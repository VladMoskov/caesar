const {Command} = require('commander');
const {makeShift} = require('./common');

const program = new Command();
const options = program
    .option('-s, --shift <number>')
    .option('-i, --input <string>')
    .option('-o, --output <string>')
    .option('-a, --action <string>')
    .parse(process.argv)
    .opts();

if (!options.shift || !options.action) {
    console.error("Options '-s/--shift' and '-a/--action' are required");
    process.exit(1);
}

if (options.action !== 'encode' && options.action !== 'decode'){
    console.error("Action must be 'encode' or 'decode'");
    process.exit(1);
}

exports.options = options;
exports.shift = makeShift(+options.shift);
