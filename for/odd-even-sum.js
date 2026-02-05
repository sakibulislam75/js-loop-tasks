/*
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */

let sum = 0;
for (let n = 91; n <= 129; n += 2) {
    console.log(`${sum}+${n}=${sum+n}`);
    sum += n;

}
console.log("sum of all the odd numbers :", sum); //total


/*
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
let sm = 0;
for (let num = 51; num <= 85; num += 2) {
    console.log(`${sm}+${num}=${sm+num}`);
    sm += num;
}
console.log("sum of all the even numbers :", sm); //total