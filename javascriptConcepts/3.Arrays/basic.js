const array = [1,2,3,4,5,6,7,8,9]
console.log(array)

//Another way to declare an array
const num = new Array(1,2,3,4,5,6,7,8,9);



//Push : pushes a new element at the end of the array
num.push(10)
console.log(num)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Unshift : insert element at the start of the array.Inserts new elements at the start of an array, and returns the new length of the array.
num.unshift(0)
console.log(num)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//pop : deletes an element from the end of array
num.pop();
console.log(num)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//shift : deletes an element from the start
num.shift();
console.log(num)
//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//modify array
num[0]= 12
console.log(num)

num[0]= {num: 80}
console.log(num)

//indexOf : returns first occurence of the element in the array
const names = ['Naman','Kshitij','Akshit','Vansh','Taru','Akash','Akshit']
console.log(names.indexOf('Akshit')) //2
//if the index doesnt exist then it returns -1 
console.log(names.indexOf('Aks')) // -1

//lastIndexOf method
console.log(names.lastIndexOf('Akshit')); //6

//includes : returns true or false based on whether a particular element exists in the array or not
names.includes('Taru') // true
// returns whether or not the element exist after the particular index(here 5) in the array  
names.includes('Vansh',5); //false 
//includes works for only primitive data types not for reference data types 


//find : works for both primitive as well as reference data types
const channels = [
    {
        name :'freecodecamp',
        subscribers : 15000
    },
    {
        name : 'Web dev simplified',
        subscribers:10000,
    },
    {
        name : 'the net ninja',
        subscribers: 30000
    }
]
