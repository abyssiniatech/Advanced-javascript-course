// this keyword is used to access the global object in node js
// the first function of this keyword is used to call inside the objects
// example 1
const info={
    name: "john",
    age:30,
    greet:function(){
        console.log(`Hello my name is ${this.name}  and  i 'm ${this.age} years old`)
    },

ismale:true
}

info.greet();

console.log(this.name);