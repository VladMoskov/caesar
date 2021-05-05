const fs = require('fs');
const {pipeline} = require('stream');
const {Cipher} = require('./lib/Cipher');
const {options} = require('./lib/comand-line')

pipeline(
    options.input ? fs.createReadStream(options.input) : process.stdin,
    new Cipher,
    options.output ? fs.createWriteStream(options.output, {flags: 'a'}) : process.stdout,
    (err) => {
        if (err) {
            process.stderr.write('Input file is not exist');
            process.exit(1);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
)
