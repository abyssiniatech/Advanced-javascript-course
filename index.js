
//execute objects in for loop 

const info={
  course:"Advance javascript course",
  description:"Everything about javascript",
  duration:"3 months",
  topics:['es6' ,'async js',"dom","oop","functional programming"]
};

for(let i=0;i<info.topics.length; i+=1){
  console.log(info.topics[i])
}