#! /usr/bin/env node
import inquirer from 'inquirer';
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNmuber",
        type: "number",
        message: "plese guess a number 1 to 6",
    },
]);
if (answer.userGuessedNmuber === randomnumber) {
    console.log("Congratulation you guessed right nnumber.");
}
else {
    console.log("You guessed wrong number.");
}
