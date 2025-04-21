console.log("Hello world the  main this's the ");
console.log('Hello world the  main "heading" ')
_1radius = 14;
radius2 = 12;
d = 14;


circle = 2;
a = 10;
Agsagdjgsadg78787jsgdga = 20;
let str = "this is the string ";
let dig = 6779879379472394792374987n;

let bol = true;


let g;
let h = null;

let obj2 = {
    name :"Ali",
    age : 23,
    isStudent : true,

}
console.log(obj.name);
console.log(obj["age"]);

const product = {
    name:"pen1",
    price: 10,
    color: "black",
    off: 5,
}
console.log(product.name);
console.log(product["price"]);
const profile  = {
    userName :"zubair ",
    followers: 1000,
    following: 200,
    posts: 50,
    desc: "the description of the profile",
    profilePic: "https://example.com/profile.jpg",
}
console.log(profile.userName);

















// ====== VAR ======
var a = 10;
console.log("var a:", a); // 10

var a = 20; // ✅ Redeclared (allowed)
console.log("var a after redeclaration:", a); // 20

a = 30; // ✅ Reassigned (allowed)
console.log("var a after reassignment:", a); // 30


// ====== LET ======
let b = 10;
console.log("let b:", b); // 10

// let b = 20; ❌ Error: Identifier 'b' has already been declared
b = 20; // ✅ Reassigned (allowed)
console.log("let b after reassignment:", b); // 20


// ====== CONST ======
const c = 10;
console.log("const c:", c); // 10

// const c = 20; ❌ Error: Identifier 'c' has already been declared
// c = 30; ❌ Error: Assignment to constant variable


// ====== HOISTING DEMO ======
console.log("var x before declaration:", x); // ✅ undefined (hoisted)
var x = 5;

// console.log("let y before declaration:", y); ❌ ReferenceError
let y = 10;

// console.log("const z before declaration:", z); ❌ ReferenceError
const z = 15;


// ====== SCOPE ======
{
  var varScope = "I'm var";
  let letScope = "I'm let";
  const constScope = "I'm const";
  console.log(constScope); // ✅ Accessible inside block
  console.log(letScope); // ✅ Accessible inside block
  
}

console.log(varScope); // ✅ Accessible outside block

// console.log(letScope);
// console.log(constScope); ❌ Error: constScope is not defined










const user = {
    name: "Ali",
    [Symbol("id")]: 123 // Unique hidden key
  };
  
  console.log(user); // Symbol key won't appear in normal iteration

  
  let obj = {};
console.log(obj.name); // ✅ undefined (property doesn’t exist)