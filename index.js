let frainds=[
  {name:"surafel",department: 'computer science'},
  {name:"abel",department: 'software engineering'},
  {name:"surfael",department: 'mechanical engineering'},
  {name:"surfael",department: 'civil engineering'},
]
// filtering the array of objects based on the name property
let filterFrainds = frainds.filter(friend =>frainds.name == "surafel")
console.log(filterFrainds)


// 
 frainds.filter((list) =>{
  
  console.log(list.department == "computer science");
  
      
}) 




// the third example
let num=[1,2,3,4,5,6,7];
let final=num.filter(numlist => numlist %2 ===0);
console.log(`the even number : ${final}`)