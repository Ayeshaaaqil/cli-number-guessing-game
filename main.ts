#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to AyeshaAaqil - CLI Number Guessing Game");

const randomNumber =Math.floor(Math.random()*5 + 1);

let answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter your guess number(number limit 1 to 5):",
    },
]);
if (answer.userGuessedNumber ===randomNumber){
console.log ("Congratulation ! you guess a correct number.")
}
else{
    console.log("your are guessing a wrong number.")
};