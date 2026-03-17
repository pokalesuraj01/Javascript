function newFun(a,b){
  console.log("this is new function ${a+b}");
}
newFun(10,20);

let newFun2 = function(a,b){
  console.log(" this is new function ${a + b}");
}
newFun2(20,30);

let newFun3 = (a,b) => {
  // console.log("this is arrow function");

}
// newFun3(5,2);
console.log(newFun3(5,2));

let newFun4 = () => console.log("this is arrow function");
newFun4();

let newFun5 = () => "this is arrow function";
console.log(newFun5());
