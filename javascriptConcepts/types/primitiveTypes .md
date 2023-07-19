# #1 Primitive Types

## In javascript everything is an object ? Nope, FALSE

#### In ECMAscript, primitive types are stated as

- Undefined 
 - string
 - boolean
 - symbol
 - number
 - object (used to create pseudo private codes on objects)
 - Bigint

### Apart from these ,
#### null, Array, Function are also kind of the ones that js calls type that do have a type which we'll discuss later

### Now the main thing, out of all these listed above, not all are objects , 
#### The objects are object,array and functions and rest all are NOT objects.

#### In js, it is not the variables that have type, it is the values that have a type.

# #2 typeof
### It tells us what is the type of value that is currently in a particular variable v.Determining something about its identity

#### undefined : when there is no other value , the value that is stored is called undefined ie 'Does not currently has a value' 

```javascript
var v = null
typeof(v) //" object " why?
//Reason being acc to js spec 'If you want to unset a regular value like a number use undefined but if you want to unset a object reference use null'

var v = function(){}
typeof(v) // function

var v = [1,2,3]
typeof(v) //object

var v = 42n //Bigint
//It can go infinitely large upto the memory space of the ecosystem
