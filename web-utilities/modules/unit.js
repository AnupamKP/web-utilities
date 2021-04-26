const readlineSync = require('readline-sync');
const kilometerToMile = function kilometerToMile(kilometer){
    return (kilometer * 0.621371).toString();
}
const mileToKilometer = function mileToKilometer(mile){
    return (mile / 0.621371).toString();
}

const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for kilometerToMile and 2 for mileToKilometer: ");
    const distanceInput = readlineSync.question("Please enter the distance : ");
    switch(input){
        case '1':
            console.log(`Output: ${kilometerToMile(distanceInput)}`);
            break;
        case '2':
            console.log(`Output: ${mileToKilometer(distanceInput)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}
module.exports = {
    moduleWrapper
}