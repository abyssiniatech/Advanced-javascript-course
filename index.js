let numbers=[1,2,3,4,5,6,7];
var sum=0;
// calculate the sum of all numbers in the array
for(let i=0; i<numbers.length;i+=1){
  sum +=numbers[i];
  console.log(`The sum of the numbers is  =   ${sum}`)
}


// calculate the sum of the nunbers in the array using foreach method
numbers.forEach(num=>{
  sum +=num;
 
})
 console.log(`The sum of the numbers using the given  method is = ${sum}`)