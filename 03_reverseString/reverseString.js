const reverseString = function(input) {
    let inputArray = input.split("");
    let outputArray = [];
    for (let i = 0; i < input.length; i++) {
        let letter = inputArray.pop();
        outputArray.push(letter);
    }
    let outputString = outputArray.toString();
    let final = "";
    for (let i = 0; i < outputString.length; i++) {
        if (i % 2 === 0 || i === 0) {
            final = final + outputString[i]
        }
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
