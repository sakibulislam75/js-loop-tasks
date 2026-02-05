/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num1 = 81;
let sum = 0;
while (num1 <= 131) {
    if (num1 % 2 != 0) {
        sum += num1;
    }
    num1++;
}
console.log("sum of all the odd numbers from 81-100:" + sum);


/*
Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let num2 = 206;
let sm = 0;
while (num2 <= 311) {
    if (num2 % 2 == 0) {
        sm += num2
    }
    num2++;
}
console.log("The sum of all the even numbers from 206  to 311: ", sm);