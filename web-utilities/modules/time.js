const readlineSync = require('readline-sync');
const toHumanDate = function toHumanDate(epochtime){
    const humanDateObj = new Date(epochtime*1000);
    return humanDateObj.toUTCString();
}
const toEpoch = function toEpoch(year,month,date,hour,min,sec){
    month -= 1;
    const humanDate = new Date(Date.UTC(year, month, date, hour, min, sec));
    const humanTime = humanDate.getTime();
    return Math.floor(humanTime/1000.0);
}
const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for Epoch Convertor and 2 for Human Time Convertor: ");
    switch(input){
        case '1':
            const epochInput = readlineSync.question("Please enter the epoch datetime : ");
            console.log(`Output: ${toHumanDate(epochInput)}`);
            break;
        case '2':
            const yearInput = readlineSync.question("Please enter the year : ");
            const monthInput = readlineSync.question("Please enter the month : ");
            const dateInput = readlineSync.question("Please enter the date : ");
            const hourInput = readlineSync.question("Please enter the hour : ");
            const minInput = readlineSync.question("Please enter the minute : ");
            const secInput = readlineSync.question("Please enter the seconds : ");
            console.log(`Output: ${toEpoch(yearInput,monthInput,dateInput,hourInput,minInput,secInput)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}
module.exports = {
    moduleWrapper
}