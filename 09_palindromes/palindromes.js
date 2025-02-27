const palindromes = function (str) {
// convert string to all lowercase
// convert string to array
// iterate over array
// filter only alpha characters
// create new empty array
// add from old to new, reversing order (shift)
    const lowerString = str.toLowerCase();
    const origArray = [];
    let filteredString = "";
    for (let i = 0; i < lowerString.length; i++) {
        if ((lowerString.charCodeAt(i) >= 97 && lowerString.charCodeAt(i) <= 122) || (lowerString.charCodeAt(i) >= 48 && lowerString.charCodeAt(i) <= 57)) {
            origArray.push(lowerString[i]);
            filteredString += lowerString[i];
        }
    }

    const reversedArray = [];
    origArray.forEach((char) => {
        reversedArray.unshift(char);
    });
    const reversedString = reversedArray.join("");

    if (filteredString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
