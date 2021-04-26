const readlineSync = require('readline-sync');
const rgbToHex = function rgbToHex(red,blue,green){
    if (red >= 256 || blue >= 256 || green >= 256){
        return 'Invalid number , rgb color cannot be more than 255!'
    }
    red = Number(red).toString(16);
    green = Number(green).toString(16);
    blue = Number(blue).toString(16);
    
    if (red.length < 2) {
      red += "0";
    }
    if (green.length < 2) {
      green += "0";
    }
    if (blue.length < 2) {
      blue += "0";
    }

    return `#${red}${green}${blue}`;
}
const hexToRgb = function hexToRgb(hex){
    let red = 0, green = 0, blue = 0;
    
    if (hex.length !== 6 ){
        return 'Invalid Hex number. Hex length should be 6.';
    }

    const RgbHex = hex.match(/.{1,2}/g);
    red = parseInt(RgbHex[0], 16);
    green = parseInt(RgbHex[1], 16);
    blue = parseInt(RgbHex[2], 16);
    
    return `(${red},${green},${blue})`;
}

const moduleWrapper = function moduleWrapper(){
    const input = readlineSync.question("\nPlease enter 1 for rgbToHex , 2 for hexToRgb: ");
    switch(input){
        case '1':
            const redInput = readlineSync.question("Please enter the number for red : ");
            const greenInput = readlineSync.question("Please enter the number for blue : ");
            const blueInput = readlineSync.question("Please enter the number for green : ");
            console.log(`Output: ${rgbToHex(redInput,greenInput,blueInput)}`);
            break;
        case '2':
            const hexString = readlineSync.question("Please enter the color in hex : ");
            console.log(`Output: ${hexToRgb(hexString)}`);
            break;
        default:
            console.log('\nInvalid Choice . Please re-run the application!');
            process.exit();
    }
}
module.exports = {
    moduleWrapper
}