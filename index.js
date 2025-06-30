// bind() is a method of the function  object that creates a new function that when called has its this keyword set to the provide value with a given sequence of arguments preceding any provided when the new function is called.accordion
// example one code bind
function multiply(a,b){
    return a*b;
}

const multiplyByTwo=multiply.bind(null,2);
console.log(multiplyByTwo(10));

// example tw code bind
const multiplyByfFour=multiply.bind(null,5);
console.log(multiplyByfFour)






// the second function to  execute the sum of the two numbers
const add=(a,b)=>{
    return a+b;
}
const addByTwo = add.bind(null,4);
console.log(addByTwo(10))