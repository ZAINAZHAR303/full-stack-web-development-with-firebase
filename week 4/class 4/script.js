const sub =(x,y)=>{

    return x-y;
}
const add = (a,b, sub)=>{
    sub(5,2); // 3
    return a+b;
}
// parameter
const anotherFunction = (a , add)=>{
let c = add(5,6) 
return a+c; // 5 + 11 = 16   
}

// console.log(anotherFunction(5,add)); // 11
// let say the runing time is 10ms
let promise = new Promise((resolve,reject)=>{
    let d = 10;
    let e = 20;
    if(e+d > 20){
        resolve("Success: The sum is greater than 20.");
    }else{
        reject("Error: The sum is not greater than 20.");
    }
})
promise.then((var1)=>{
    console.log(var1);
})
.catch((err)=>{
    console.log(err);
})
// call stack 
async function fetchData() {

    let response = await fetch("https://fakestoreapi.com/products")
    console.log("Response fetched:", response); // 30
    let data = response.json()
    console.log("Data fetched:", data); // 30
    
    

    console.log("Data fetched:", data); // 30
}

// fetchData(); // 30

// setTimeout(fetchData,5000);
setInterval(()=>{
    console.log("Interval function called")
    
},5000) // 1 is the id of the interval function


































// const Add = ()=>{
//     console.log("Add function called");
// }
// function addInThirdFunction(Add){
//     Add();

// }
// addInThirdFunction(Add);

// // Define an async function
// async function fetchProducts() {
//     try {
//       // Fetch data from the Fake Store API
//       const response = await fetch('https://fakestoreapi.com/products');
      
//       // Convert the response to JSON
//       const data = await response.json();
      
//       // Log the data
//       console.log("Fetched Products:", data);
//     } catch (error) {
//       // Handle any errors
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   // Call the function
//   fetchProducts();
  

// let promise = new Promise((resolve, reject) => {
//     let x = 10;
//     let y = 20;
//     if (x + y > 20) {
//         resolve("Success: The sum is greater than 20.");
//     } else {
//         reject("Error: The sum is not greater than 20.");
//     }
// });
// promise.catch((error) => {
//         console.log(error);
//     });

































// function greet(name, callback) {
//     // console.log("Hello, " + name);
//     callback(); // calling the callback function
//   }
  
//   function sayBye() {
//     // console.log("Goodbye!");
//   }
  
//   // Call greet and pass sayBye as a callback
//   greet("Ali", sayBye);
  