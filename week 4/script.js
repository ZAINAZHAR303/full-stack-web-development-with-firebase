// function defination 

function FirstFunction (){
    console.log( "FirstFunction" );
    console.log( "FirstFun" );
    console.log( "FirstFunction" );
    
}
// function call 
// FirstFunction();


let  a = 10 ;
let b = 20;
console.log(a+b);



// function define 
function add(x, y){
    return x + y;
}
const addWithArrow= (x,y)=>{
    return x + y;
}
// function call
// console.log( a + b);
// console.log(add( a, b ));


// let d = 30 ;
// let f = 40 ;
// console.log(add(d, f));

// function vowelInAString (string1){
//     let vowels = "aeiouAEIOU"
//     let count = 0 ;
//     for (let i = 0; i < string1.length ;i++  ){
//         if(vowels.includes(string1[i])){

//             count++;
//         }

//     }
    
//     return count;
// }
// const findVowelUsingArrowFunc = (string2)=>{
//     let vowels = "aeiouAEIOU"
//     let count = 0 ;
//     for (let i = 0; i < string2.length ;i++  ){
//         if(vowels.includes(string2[i])){

//             count++;
//         }

//     }
    
//     return count;
// }
// let str = "zubairSEHZAD";
// let str2 = "TheVowelCheck"
// let constInAString = vowelInAString(str2);
// let constInAString1 = vowelInAString("TheVowelCheck");


// console.log("the count outside function is ", constInAString);
// console.log(findVowelUsingArrowFunc(str2));


// for each function 
let arr = [ 1, 2, 3, 4, 5 ];
arr.forEach((value)=>{
    console.log(value +2);

})
























// arr = [ 1, 2, 3, 4, 5 ];
// arr.map( ( value, index, array )=>{

//     console.log( value, index, array );
//     return value * 2;
// } )
 