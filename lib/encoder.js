const {isAlpha} = require('./common')

exports.encode = (char, shift) => {
    if (isAlpha(char)) {
        if (char > 64 && char < 91) {
            return (char - 65 + shift) % 26 + 65
        } else if (char > 96 && char < 123) {
            return (char - 97 + shift) % 26 + 97
        }
    }
}

exports.decode = (char, shift) => {
    if (isAlpha(char)) {
        if (char > 64 && char < 91) {
            let tmp = (char - 65 - shift) % 26;
            if (tmp < 0) tmp += 26;
            return tmp + 65
        } else if (char > 96 && char < 123) {
            let tmp = (char - 97 - shift) % 26;
            if (tmp < 0) tmp += 26;
            return tmp + 97
        }
    }
}