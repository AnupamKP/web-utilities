const readlineSync = require('readline-sync');
const binaryToDecimal = function binaryToDecimal(binary){
    return parseInt(binary, 2).toString(10);
}
const binaryToHex = function binaryToHex(binary){
    return parseInt(binary, 2).toString(10);
}
const binaryToOctal = function binaryToOctal(binary){
    return parseInt(binary, 2).toString(10);
}
const decimalToBinary = function decimalToBinary(decimal){
    return parseInt(decimal, 10).toString(2);
}
const decimalToHex = function decimalToHex(decimal){
    return parseInt(decimal, 10).toString(2);
}
const decimalToOctal = function decimalToOctal(decimal){
    return parseInt(decimal, 10).toString(2);
}

const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for binaryToDecimal , 2 for binaryToHex , 3 for binaryToOctal, 4 for decimalToBinary , 5 for decimalToHex, 6 for decimalToOctal: ");
    const convertNumber = readlineSync.question("Please enter the number : ");
    switch(input){
        case '1':
            console.log(`Output: ${binaryToDecimal(convertNumber)}`);
            break;
        case '2':
            console.log(`Output: ${binaryToHex(convertNumber)}`);
            break;
        case '3':
            console.log(`Output: ${binaryToOctal(convertNumber)}`);
            break;
        case '4':
            console.log(`Output: ${decimalToBinary(convertNumber)}`);
            break;
        case '5':
            console.log(`Output: ${decimalToHex(convertNumber)}`);
            break;
        case '6':
            console.log(`Output: ${decimalToOctal(convertNumber)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}
module.exports = {
    moduleWrapper
};