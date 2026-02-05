/*
Subtask-1:
Find all the odd numbers from 61 to 100.
 */

for (let i = 61; i <= 100; i += 2) { //way1
    console.log(i);

}
//----- Another way using if else-----//
for (let i1 = 61; i1 <= 100; i1++) {
    if (i1 % 2 != 0) {
        console.log("Odd Number:", i1)
    }
}



/*
Subtask-2:
Find all the even numbers from 78 to 98.
 */

for (let k = 78; k <= 98; k += 2) {
    console.log("Even No:", k);
}

//----- Another way using if else-----//
for (let k1 = 78; k1 <= 98; k1++) {
    if (k1 % 2 == 0) {
        console.log("even No:", k1);
    }
}