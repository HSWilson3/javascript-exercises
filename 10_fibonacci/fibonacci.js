const fibonacci = function(num) {
    const toNum = Number(num);
    if (toNum < 0) {
        return "OOPS";
    } else if (toNum === 0) {
        return 0;
    }
    let sequence = [1, 1];
    for (let i = 2; i <= toNum; i++) {
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence.at(toNum - 1);
};

// Do not edit below this line
module.exports = fibonacci;
