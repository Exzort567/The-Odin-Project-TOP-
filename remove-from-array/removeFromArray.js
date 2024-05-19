const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
}

let arr = [1, 2, 3, 4, 5];
let result = removeFromArray(arr, 2, 3);
console.log(result);