let text = ["fruits", "vegetables", "dairy"];

let marks = [10, 20, 30]; //0, 1,2 
let info = ["zain", 20, "city"]


let students = [85, 97, 44, 37, 76, 60]

for(let i=0; i<students.length; i++){
    if(students[i] ==88){
        console.log("True")
    }
}
// console.log(false)




// students.splice(1,2,200,500)
// console.log(students)
// // let slice_std = students.slice(0,4)
// console.log(slice_std)
// marks.unshift(120)
// marks.shift()
// console.log(marks)
// let concatenate = text.concat(marks)
// console.log(concatenate)
// text_string = text.toString()
// console.log(text_string)
// marks.push(100)
// console.log(marks)

// marks.pop()
// console.log(marks)

// console.log(text[2])
// // console.log(text)
// for(let i=0; i<text.length; i++){  
//     console.log(text[i])
// }

// for( i of text) {
    
//     console.log(i)
// }

// console.log(info)
// [85, 97, 44, 37, 76, 60]


// find the Average of the students marks

// let students = [85, 97, 44, 37, 76, 60]

// let total = 0;
// for (let i=0; i<students.length; i++){
//     total += students[i] // 0+85+97 total= sum  // total = total +students[i]

// }
// let average = total/students.length;
// console.log(average)
// [250, 645, 300, 900, 50]


// let prices = [250, 645, 300, 900, 50]
// for(let i=0 ; i<prices.length; i++){
//     // 250*0.10
//     prices[i] = prices[i] - (prices[i]*0.10)
// }

// console.log(prices)
// “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift()
console.log(companies)
companies.splice(1,1,"ola")
console.log(companies)
companies.push("Amazon")
console.log(companies)

