const crypto = require('crypto');
const readlineSync = require('readline-sync');

const md5Hash = function md5HashEncode(password){
    return crypto.createHash("md5").update(password).digest('hex');
}
const sha1Hash = function sha1HashEncode(password){
    return crypto.createHash("sha1").update(password).digest('hex');
}
const sha256Hash = function sha256HashEncode(password){
    return crypto.createHash("sha256").update(password).digest('hex');
}
const sha512Hash = function sha512HashEncode(password){
    return crypto.createHash("sha512").update(password).digest('hex');
}

const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for md5 , 2 for sha1 , 3 for sha256 and 4 for sha512: ");
    const encodeString = readlineSync.question("Please enter the string to be hashed : ");
    switch(input){
        case '1':
            console.log(`Output: ${md5Hash(encodeString)}`);
            break;
        case '2':
            console.log(`Output: ${sha1Hash(encodeString)}`);
            break;
        case '3':
            console.log(`Output: ${sha256Hash(encodeString)}`);
            break;
        case '4':
            console.log(`Output: ${sha512Hash(encodeString)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}
module.exports = {
    moduleWrapper
}