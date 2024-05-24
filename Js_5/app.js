// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// console.log(arr);

// for (let i=0; i<arr.length; i++) {
//     if(num == arr[i]){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);



// let number = 287152;
// let count = 0;
// let sum = 0;

// let copy = number;

// while(copy >= 1){
//     let digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
//     count++;
// }

// console.log(count);
// console.log(sum);




// let n = prompt("please enter a number")

// // n = parseInt(n);
// let fact = 1;

// // for (let i=n; i>0; i--) {
// //     fact *= i;
// // }

// while (n > 0){
//     fact *= n;
//     n--;
// }

// console.log(fact);




let arr = [1000, 1000, 1, 10, 999, 1];

let largest = -1;
let secondLargest = -1; // output should be -1 if 2nd largest is not exist

for(let i=0; i<arr.length; i++){
    if(largest < arr[i]){
        secondLargest = largest;
        largest = arr[i];
    } else if ((arr[i] != largest) && (secondLargest < arr[i])){
        secondLargest = arr[i];
    }
}

console.log(largest);
console.log(secondLargest);

