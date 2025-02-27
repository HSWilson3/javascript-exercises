const findTheOldest = function(arr) {
    // for each item in array
    // check whether there is a yearOfDeath
    // if not, find today's date and subtract yearOfBirth
    // map item.age to the result
    // if there is yearOfDeath, find yearOfDeath - yearOfBirth
    // map item.age to the result

    const currentYear = new Date().getFullYear();
    arr.forEach((item) => {
        if (!item.yearOfDeath) {
            console.log("not dead");
            item.age = currentYear - item.yearOfBirth;
        } else {
            console.log("dead");
            item.age = item.yearOfDeath - item.yearOfBirth;
        }
    })
    const sorted = arr.sort((a, b) => b.age - a.age);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
