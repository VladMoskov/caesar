const fs = require('fs');
const {pipeline} = require('stream');
const {Cipher} = require('./lib/Cipher');
const {input, output} = require('./lib/comand-line')

pipeline(
    input ? fs.createReadStream(input) : process.stdin,
    new Cipher,
    output ? fs.createWriteStream(output, {flags: 'a'}) : process.stdout,
    (err) => {
        if (err) {
            process.stderr.write(err);
            process.exit(1);
        } else {
            console.log('Pipeline succeeded.');
            process.exit(0);
        }
    }
)
