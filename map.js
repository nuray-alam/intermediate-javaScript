const numbers = [3, 4, 5, 6, 7, 8];
console.log(numbers);
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// function square(element){
//     return element * element;
// }


// numbers.map(function(element,index, array){
//     console.log(element,index, array);
// })


const output = numbers.map(element => element * element);
console.log(output);