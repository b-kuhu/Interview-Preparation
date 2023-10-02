//imperative javascript
/* function data() {
    return [1,2,3,4]
}
var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2]
*/

/* declarative javascript using Destructuring assignment
function data() {
    return [1,2,3,4]
}
var [ first,second = 0,third] = data()

console.log(second)
*/

//2.Spread operator 
/*
function data() {
    return [1,2,3]
 }
 var tmp = data();
 var first = tmp[0];
 var second = tmp[1];
 var third = tmp.slice(3)

  console.log(third)
*/  
  // we slice the array at index 3 where the array size itself is three
//  so the array that we sliced after index 3 will be empty hence we get empty array as an output.
//NEW METHOD 

 function dataModified() {
    return [1,2,3,4]
}
var tmp;
var [ first,second , ...third] = dataModified()
console.log(...third)
//The difference between the old as well as the new method is that in the old method,we used to have our function stored in tmp whereas in the
//new method we dont have the array stored in tmp variable and sometimes we do require the array also in our code.
//if you want to access the array as well as its destructured parts, you can chain them together by an equals to operator
function dataModified() {
    return [1,2,3,4]
}
var tmp;
var [ first,second , ...third]=tmp = dataModified()
console.log(tmp) //[1,2,3,4]