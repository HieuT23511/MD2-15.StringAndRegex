import * as readline from "readline-sync";

class isValidPhoneNumber {
    patternName = /^\([0-9]{2}\)-0[0-9]{9}$/;

    checkValidName(phoneNumberNeedCheck: string) {
        if (this.patternName.test(phoneNumberNeedCheck)) {
            console.log(`This phone number ${phoneNumberNeedCheck} is Valid! `)
        } else {
            console.log(`This phone number ${phoneNumberNeedCheck} is inValid! `)
        }
    }
}

let phoneNumberNeedCheck = readline.question(`Input the phone number: `)
let validPhoneNumber = new isValidPhoneNumber();
validPhoneNumber.checkValidName(phoneNumberNeedCheck);
