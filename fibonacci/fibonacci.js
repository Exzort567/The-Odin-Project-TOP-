const fibonacci = function(fib) {
    let count;
    if (typeof fib !== 'number') {
        count = parseInt(fib);
    } else {
        count = fib;
    }

    if (count < 0) return "wopsie";
    if (count === 0) return 0;

    let prevNode = 1;
    let nextPrevNode = 0;

    for (let i = 2; i <= count; i++) {
        let curr = prevNode + nextPrevNode;
        nextPrevNode = prevNode;
        prevNode = curr;
    }

    return prevNode
};

// Do not edit below this line
module.exports = fibonacci;