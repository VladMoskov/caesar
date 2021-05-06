const makeShift = (shift) => {
    let tmp = shift;
    if (tmp < 27 && tmp > 0) {
        return tmp;
    } else if (tmp > 26) {
        tmp -= 26;
        return makeShift(tmp);
    } else if (tmp < 0) {
        tmp += 26;
        return makeShift(tmp);
    }
}

exports.isAlpha = (char) => {
    return char > 64 && char < 91 || char > 96 && char < 123
}

exports.makeShift = makeShift