# DESTRUCTURING
 
 ## 1. BASICS
 ### Earlier we used to write imperative javscript

 ```javascript
 function data() {
    return [1,2,3,4]
}
var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2]
 ```

#### In ES6, we have declarative javascript which allows us to use destructuring.Destructuring allows to destroy an array or object into smaller elements and lets us access them according to pattern.On the right hand side is the array or object that needs to be destructured. It improves the efficiency and readability of the code.

```javascript
function data() {
    return [1,2,3,4]
}
var [ first,second = 0,third] = data()

console.log(second)
```

#### If we want to leave any value/values in between our destructuring array, we can do it by leaving no data between two commas as below :
```javascript
function data() {
    return [1,,3,4]
}
var [ first,second,third] = data()

console.log(second) //O/P: undefined
```

## 2. SPREAD OPERATOR AND DECLARING DESTRUCTURED ARRAYS
### Previously we used to print remaining elements of an array using slice method
```javascript
function data() {
    return [1,2,3]
 }
 var tmp = data();
 var first = tmp[0];
 var second = tmp[1];
 var third = tmp.slice(3)
 console.log(third) // we slice the array at index 3 where the array size itself is three
//  so the array that we sliced after index 3 will be empty hence we get empty array as an output.
```

### using spread operator, we can modify the above code
```javascript
 function dataModified() {
    return [1,2,3,4]
}
var tmp;
var [ first,second , ...third] = dataModified()
console.log(...third) //3 4
```
#### The difference between the old as well as the new method is that in the old method,we used to have our function stored in tmp whereas in the new method we dont have the array stored in tmp variable and sometimes we do require the array also in our code.So,if you want to access the array as well as its destructured parts, you can chain them together by an equals to operator
```js
function dataModified() {
    return [1,2,3,4]
}
var tmp;
var [ first,second , ...third]=tmp = dataModified()
console.log(tmp) //[1,2,3,4]
```

