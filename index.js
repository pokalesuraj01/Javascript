function add() {
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log("The sum is : ",c);
}
add();

// var a = 79;
// var b = 21;
// var c = a + b;

// function newAdd() {
//   console.log("The sum is : ",c);
// }
// newAdd();

function new1() {
  let b = "this is local inside local scope ";
  console.log(b);
  if(true){
    var a = "this is inside block scope and it accessible within all the scope of function because of var keyword";
  }
  console.log(a); // it can be accessible here 
}
new1();
console.log(a); // can't be accessible outside the functional scope .
console.log(b);