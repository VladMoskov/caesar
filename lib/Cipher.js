const { Transform } = require('stream');
const {encode, decode} = require('./encoder');
const {shift, options} = require('./comand-line');
const {isAlpha} = require('./common');

class Cipher extends Transform {
    _transform(chunk, _, callback) {
        for (let i = 0; i < chunk.length; i++) {
            if (!isAlpha(chunk[i])) {
                chunk[i] = chunk[i];
            } else {
                if (options.action === 'encode') chunk[i] = encode(chunk[i], shift);
                if (options.action === 'decode') chunk[i] = decode(chunk[i], shift);
            }
        }
        callback(null, chunk);
    }
}

exports.Cipher = Cipher;