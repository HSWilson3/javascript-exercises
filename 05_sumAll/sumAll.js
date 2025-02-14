const sumAll = function(first, last) {
    if (!(typeof first === "number") || 
        !(typeof last === "number") || 
        !(Math.floor(first) === first) || 
        !(Math.floor(last) === last) ||
        (first < 0) ||
        (last < 0)) {

        return "ERROR";

    } else {

        if (first > last) {
            let temp;
            temp = first;
            first = last;
            last = temp;
        }

        let sum = 0;

        for (let i = first; i <= last; i++) {
            sum = sum + i;
        }
        
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
