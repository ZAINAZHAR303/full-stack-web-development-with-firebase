let numbers = [1,2,3,4];  

let for_new = numbers.forEach(number =>{
    // console.log(number*number)
    return number*number
})
console.log(for_new)

let new_arr = numbers.map(number =>{
    // console.log("chnage in map method",number*number)
    return number%2 === 0;
})
console.log("this is filter in map",new_arr)
// for(let i=0;i<numbers.length;i++){
//     console.log("for loop square",numbers[i]*numbers[i])
// }
// console.log(new_arr)

let filtered_arr = numbers.filter(number=>{
    return number%2 === 0;
})
console.log(filtered_arr)

let array = []

const reduce_sum = array.reduce((acc,curr)=>{
    return curr+acc
},0)
console.log(reduce_sum)