const repeatString = function(string, repeat) {
    let hey = string;

    //Repeat string x amount of times
    for (let i = 1; i < repeat; i++){
        string += hey; 
    }

    //Check if repeat is < || = 0 and return a value

    return repeat == 0 ? ''
         : repeat < 0  ? 'ERROR'
         : string;

}

module.exports = repeatString
