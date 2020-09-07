const removeFromArray = function(array, removeNum) {
    let i = 0;

    do {
        if (array[i] == removeNum){
            array.splice(array.indexOf(removeNum), 1);
        }
        i++;
    } while (i < array.length - 1)

    return array;
}

module.exports = removeFromArray
