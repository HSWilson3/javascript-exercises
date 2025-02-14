const removeFromArray = function(inputArray, ...items) {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let flag = 0;
        for (const item of items) {
            if (inputArray[i] === item) {
                flag = 1;
            }
        }
        if (flag === 0) {
            outputArray.push(inputArray[i]);
        }
        
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
