// Es6 course 
// After 2015 javascript is the amazing change so let us see one by one
// let vs var vs const

// the difference between let and var is that let is block scope and  var is function scope.accordion

function sayHi(){
  for(let i=0; i<5; i+=1){
    console.log(i);
    
  }
  // console.log(`the final value of i is :${i}`)
}
sayHi();





// the difference between let and const is that let can be reassigned but const cannot be reassigned
// example 


let name ="surafel "
const age=23

name="achamyeleh"
function info(){
  console.log(`my name is ${name} and i 'm ${age} years old`)
}
info();



// the disadvantage of var keyword is that it can be redeclared and  reassigned   
// example
function surafel(){
  var name ="abel"
  name='Yared'
   console.log(name)
}

surafel()