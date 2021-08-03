var input = "My name is shubham chaturvedi"

function getTheCountSolution(input) {
    let output = {};
    for (let index = 0; index < input.length; index++) {
        const element = input[index].toLowerCase();
        if (/[a-z0-9]/.test(input[index])) {
            if (output[element]) {
                output[element]++
            } else {
                output[element] = 1;
            }
        }
    }
    return output;
}

function getTheCountSolution1(input) {
    let output = {};
    for (const iterator of input) {
        if (/[a-z0-9]/.test(iterator)) {
            output[iterator] = ++output[iterator] || 1
        }
    }
    return output;
}

function getTheCountSolution2(input) {
    let output = {};
    for (const iterator of input) {
        if (isAlphanumeric(iterator)) {
            const element = iterator.toLowerCase();
            output[element] = ++output[element] || 1
        }
    }
    return output;
}

function isAlphanumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false
    }
    return true;
}

// console.log(getTheCountSolution(input))
// console.log(getTheCountSolution1(input))
console.log(getTheCountSolution2(input))

