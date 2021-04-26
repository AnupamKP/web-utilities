const readlineSync = require('readline-sync');
const urlEncode = function urlEncode(url){
    return encodeURIComponent(url);
}

const urlDecode = function urlDecode(url){
    return decodeURIComponent(url);
}

const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for Encoder and 2 for Decoder: ");
    switch(input){
        case '1':
            const encodeURL = readlineSync.question("Please enter URL to be Encoded : ");
            console.log(`Output: ${urlEncode(encodeURL)}`);
            break;
        case '2':
            const decodeURL = readlineSync.question("Please enter URL to be Decoded : ");
            console.log(`Output: ${urlDecode(decodeURL)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}

module.exports = {
    moduleWrapper
}