const removeFromArray = function(inputArray, ...items) {
//function removeFromArray(inputArray, ...items) { // delete for testing
    //console.log("input array is " + inputArray);
    //console.log("items to remove are " + items);
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        //console.log("checking " + inputArray[i]);
        let flag = 0;
        for (const item of items) {
            //console.log("against " + item);
            if (inputArray[i] === item) {
                //console.log("they're the same")
                flag = 1;
            } //else {
                //console.log("not the same, adding " + inputArray[i] + " to output")
            //}
        }
        if (flag === 0) {
            outputArray.push(inputArray[i]);
        }
        
    }
//    console.log("output array is " + outputArray);
    return outputArray;
};

//removeFromArray([1, 2, 3, 4], 3, 2); // delete for testing
// Do not edit below this line
module.exports = removeFromArray; // uncomment for testing
