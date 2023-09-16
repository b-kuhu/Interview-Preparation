const sayHello = (greeting,name) => {
    console.log(greeting + " " + name)
    console.log("Hi")
} 

// sayHello("Good Afternoon","Kuhu");

/* can also be written as 
param =>{ //statements } instead of (param) =>{ //statements } 
    */
   
   const x = {
       name:"kuhu",
       role:"software developer",
       exp:5,
       show:function(){
        //using traditional function syntax
        /*   setTimeout(function(){
               console.log(`The name is ${this.name}\n The role is ${this.role}`)
            },2000)
        }//o/p::
         undefined
           The name is 
           The role is undefined */
        //using arrow function 
        setTimeout(()=>{
            console.log(`The name is ${this.name}\n The role is ${this.role}`)
         },2000)
         //o/p: The name is kuhu
         //     The role is software developer  
    }
}
    console.log(x.show())
