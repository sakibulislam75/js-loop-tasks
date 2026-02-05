/*
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
//----another way---//
let number1 = 61;
while (number1 <= 100) {
    console.log('odd no:', number1);
    number1 += 2;
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
//----another way---//
let n1 = 78;
while (n1 <= 98) {
    console.log("even no:", n1);
    n1 += 2;
}