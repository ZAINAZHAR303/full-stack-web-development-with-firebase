// let marks = [67,78,97,56,45,91,94,93,34,24]

// const highscores = marks.filter(mark=> {
//     return mark>=90
// })
// console.log(highscores)

const number = prompt("enter a number")  // "20", 20
const int_num = parseInt(number)
const numbers = [];
for(let i=1;i<=int_num;i++){
    numbers.push(i)
}
console.log(numbers)

let sum_arr = numbers.reduce((acc,curr)=> acc+curr,0)
let prod_arr = numbers.reduce((acc,curr)=> acc*curr,1)

console.log(sum_arr)
console.log(prod_arr)