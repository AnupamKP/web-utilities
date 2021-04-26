const config = require('./config');
const urlModule = require('./modules/url');
const unitModule = require('./modules/unit');
const timeModule = require('./modules/time');
const hashModule = require('./modules/hash');
const base64Module = require('./modules/base64');
const numberModule = require('./modules/number');
const colorModule = require('./modules/color');
const readlineSync = require('readline-sync');


const selectAppToRun = function selectAppToRun(appSelectionInput){
    switch(appSelectionInput){
        case '1': 
            urlModule.moduleWrapper();
            break;
        case '2':
            base64Module.moduleWrapper();
            break;
        case '3':
            hashModule.moduleWrapper();
            break;
        case '4':
            timeModule.moduleWrapper();
            break;
        case '5':
            numberModule.moduleWrapper();
            break;
        case '6':
            colorModule.moduleWrapper();
            break;
        case '7':
            unitModule.moduleWrapper();
            break;
        default:
            console.log('\nInvalid Input. Please re-run again!!');
            process.exit();
    }
}

const greetUser = function greetUser(){
    console.log(config.userGreetingMessage);

    let idx = 1;
    config.userOptions.forEach( (appName) => {
        console.log(`${idx}) ${appName}`);
        idx += 1;
    })
    console.log();
}

const runUtilityApps = function runUtilityApps() {
    greetUser();
    appSelectionInput = readlineSync.question('Enter the application number you want to use: ');
    selectAppToRun(appSelectionInput);
    console.log(config.userFarewellMessage);
}

runUtilityApps();