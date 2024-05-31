#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        name: "sentence",
        message: chalk.green.italic("enter your sentence to count words: "),
        type: "input"
    }]);
// ***************** USER INPUT *****************************//
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(chalk.blue.bold(`your sentence word count is ${words.length}`));
