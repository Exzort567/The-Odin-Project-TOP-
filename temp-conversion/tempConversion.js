const convertToCelsius = function(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
};

const convertToFahrenheit = function(celsius) {
    return (celsius * (9/5)) + 32;
};

console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(100)); 
console.log(celsiusToFahrenheit(25)); 

console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(212)); 
console.log(fahrenheitToCelsius(77)); 