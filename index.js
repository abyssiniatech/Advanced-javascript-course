// map() array of numbers to their squares
const numbers=[1,2,3,4,5,6];
numbers.map(num=>console.log(num*num));

// the second exa,ple is to map of an array of objects to their names
const people={
   person1: {name: "surafel",age:24},
   person2: {name: "Abel",age:34},
   person3: {name: "aster",age:14}
}


console.log(Object.keys(people).map(key =>people.person1));

// the third example is to map an array of objects to their names
const peopleArray =[
   {name:"surafel", age:24},
   {name:"yarde", age:34},
   {name:"nahom", age:14},

]

console.log(peopleArray.map(person =>` my name is ${person.name} and  i'm ${person.age} years old`));
