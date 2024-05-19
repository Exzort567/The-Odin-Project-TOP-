const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        console.log("Its leap year!")
    } else {
        console.log("Its not a leap year!")
    }
};