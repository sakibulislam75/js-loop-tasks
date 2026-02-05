/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let number = 61;
while (number <= 100) {
    if (number % 2 != 0) {
        console.log("The odd numbers are:", number)
    }
    number++;
}


/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let n = 78;
while (n <= 98) {
    if (n % 2 == 0) {
        console.log('The even number are:', n);
    }
    n++;
}