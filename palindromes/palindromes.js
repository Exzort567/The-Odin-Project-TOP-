const palindromes = function(str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const modifyString = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    const reversedString = modifyString.split('').reverse().join('');

    return modifyString === reversedString;

                        
}