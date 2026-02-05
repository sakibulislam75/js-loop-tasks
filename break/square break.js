/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let n = 1;
while (n <= 100) {
    if ((Math.sqrt(n) % 1 == 0) && n != 1) {
        break;
    }
    console.log(n);
    n++;
}