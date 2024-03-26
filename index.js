#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        message: "please guess a number between 1-6:",
        type: "number",
        name: "userGuessNumber",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congtratulation! you guess right number");
}
else {
    console.log("you gueses wrong number try again");
}
