const readlineSync = require('readline-sync');
const base64Encode = function base64Encode(password){
    return Buffer.from(password).toString('base64');
}
const base64Decode = function base64Decode(password){
    return Buffer.from(password, 'base64').toString('ascii');
}

const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for Encoder and 2 for Decoder: ");
    switch(input){
        case '1':
            const encodebase64 = readlineSync.question("Please enter the string to be Encoded : ");
            console.log(`Output: ${base64Encode(encodebase64)}`);
            break;
        case '2':
            const decodebase64 = readlineSync.question("Please enter the string to be Decoded : ");
            console.log(`Output: ${base64Decode(decodebase64)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}
module.exports = {
    moduleWrapper
}