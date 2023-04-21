import * as readline from "readline-sync";
// let patternName = /^[CAP]\d{4}[GHIKLM]$/
// let inputStringNeedCheckValid = readline.question(`Input the name of class: `);
// if(patternName.test(inputStringNeedCheckValid)){
//     console.log(`This name ${inputStringNeedCheckValid} is Valid`)
// } else {
//     console.log(`This name ${inputStringNeedCheckValid} is invalid`)
// }
class isValidName {
    patternName = /^[CAP]\d{4}[GHIKLM]$/;
    checkValidName(stringNeedCheck:string){
        if(this.patternName.test(stringNeedCheck)){
            console.log(`This name ${stringNeedCheck} is Valid! `)
        }
        else {
            console.log(`This name ${stringNeedCheck} is inValid! `)
        }
    }
}
let inputStringNeedCheckValid = readline.question(`Input the name of class: `)
let validName = new isValidName();
validName.checkValidName(inputStringNeedCheckValid);
