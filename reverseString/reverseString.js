const reverseString = function(string) {
    let i = string.length - 1;
    let reversedString = '';

    while (i >= 0) {
        reversedString += string[i];
        i--;
    }

    return reversedString;
}

module.exports = reverseString