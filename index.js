// console.log("hello guys are you ready to learn js")
// function  Hello(){
//     console.log("hey there it is the best")
// }
// Hello()


// variables in js 
// let name="surafel";
// let age =12;
// let is_male=true;
// let email;
// let nums=[1,2,3,4,5,6];
// let sex=null
// console.log("hay there she is so beauty")









// age calculator projects
// let currentYear=prompt("enter the current year");
// let birthYear=prompt("enter the BirthYear")
// function AgeCalculator(){
//     let age =currentYear-birthYear;
//     let futureYear=age + 10;
//     console.log(`the current year of m.r surafel is   ${age} years `)
//     console.log(`the future year of m'r  surafel  after 10 years is  ${futureYear}   years old`)

// }
// AgeCalculator();








// declare variable in javascript 
// there are three ways to declare a variable
// 1. let 
// 2. var
// 1. const 
// let is a type of declare variable which use to declare variable
// example
// let age=34;
// console.log(age)
// const is a type of immutable type of declare in variable in javascript
// var birthYear=1992;
// birthYear=2012
// console.log(birthYear)







// there are different types of functions such as 
// 1 function declaration
// function calcAge(birthYear){
//     return 2037-birthYear;
// }

// function expression 
//  thee type of function is the value of a function is stored in the variables\
// const calcAge=function(birthYear){
//   return 2037-birthYear;
// }

// arrow function  is the type of function a short way of function
// const calcAge=birthYear=>2037-birthYear




// ***operators in  javascript*** ??
// const ageSurafel=2025-1992
// console.log(ageSurafel)
// operators are the backbone of programming langudge
let num1=3;
let num2=5;
// let pow=Math.pow(num1,num2)
// console.log(pow)
// console.log(Math.round(3.125))
// console.log(Math.sqrt(100));
// console.log(Math.ceil(3.89));




// comparesion  operator  is to compare two or more variable


// console.log(num1>num2)
// console.log(num1==num2)
// console.log(num2>=num1)
// console.log(num1===num2)



// operator pricedence 
// console.log((num1*num2)+100-30*23/num1)

// function averageage(john,surafel){
//     return john + surafel/2
// }
// const avg=averageage(12,23)
// console.log(avg)


// project one calculate bmi 
// let height1=1.69;
// let weight1=78

// let  weight=95;
// let height=1.76;
// bmi=weight/height **2;
// bmi1=weight1/height1 **2
//  function bmiJon(){
//        return  bmi
//  }

//  function bmiSurafel(){
//     return bmi1
//  }
// let surafel=bmiSurafel()
// let john = bmiJon()
// console.log(surafel)
// console.log(john)

// console.log(`the bmi of surafel is  grater than john` +  surafel > john )
// console.log(`the bmi of john is  grater than surafel` +  john > surafel )




// string literal
// let name=`surafel`
// const age=24;
// const profession='web developer';
// console.log(`my name is ${name} and i 'm ${age} years old and  i 'm ${profession}`);




// project two 
// let age=8;
// if(age>=18){
//     console.log("you can start driving license  ")
// }
// else{
//   console.log("you can not start driving license")
// }

// coding challenge two

// const massSurafel=67;
// const heightsurafel=1.80
// const  massAbel=90
// const  heightAbel=1.85


// surafelBmi=massSurafel/ heightsurafel **2;
// abelBmi=massAbel / heightAbel ** 2
// console.log(surafelBmi ,abelBmi );
// if (surafelBmi > abelBmi){
//     console.log(`the bmi of surafel is greater than bmi surafel`)
// }
// else{
//     console.log(`the bmi of abel is greater than surafel`)
// }


// type conversion is the nice tool to manipulate javascript code 
// used to convert one datatype to another types 

// let name=true;
// let name1=false;
// console.log(name && name1)
// console.log(name ||  name1)
// console.log(!name)
// the three boolean operator is used to execute logical operation in javascript



// example 
// let hasGoodVision=true;
// let  age=11;
// if(hasGoodVision && age>=18){
//     console.log("you can start driving license")
// }
// else{
    
//     console.log("these console.log('you can not start driving license ')
// }




// function hello(a){
//     return a+1
// }
// console.log(hello(10))


// switch statement
// let date =40
// switch(date){
//     case 1:
//         console.log("monday")
// break;
//     case 2:
//         console.log("thuseday")
// break;
//      case 3:
//         console.log("wednesday")
// break;
//      case 4:
//         console.log("thirsday")
// break;
//     case 5:
//               console.log("friday")
// break;
//      case 6:
//             console.log("saterday")
// break;
//     case 7:
//              console.log("sunday")
//              break;
//     default :
//     console.log("invalid input")

// }



// ternary operators are used to excutes the condition like  if else statetment
// let ages=13
// ages<=18 ? console.log("you can drink water 💧")
// : console.log("you can drink wine wine🍷")



// coding challenge 3




// let bill=275;
// let bill=430;
// let tip=bill<=300 && bill >=50 ? bill*0.15 : bill * 0.2;
// console.log(`the bill was ${bill} ,then the tip was ${tip} and the total value was ${bill + tip}`)



// 

// function Hello(a,b){
//     return a* b
// }

'use strict'



// function course
//  basic  function 
// function name(a){
//     return a
// }
// const person1=name(`my name is ${"surafel"}`)
// const person2=name(`my name is ${"abel"}`)
// console.log(person1)
// console.log(person2)


// function Surafel(){
//     console.log(`my name is surafel`)
// }


// function age(){
//     console.log(`i'm 30 years old`)
//     Surafel()
// }
// age()
// let name=function(num){
//     return num*5
// }
// const input=name(12)
// console.log(input)



// arrow function is the the third type of javascript 


// arrow function is the short hand function declarations
// let info=(currentYear,birthYear)=>{
//     return currentYear-birthYear
// }
// let output=info(2025,1992);
// console.log(output)









// project three calculate retirment age


// const calcage=function(birthYear){
//     return 2025-birthYear
// }

// const calculateRetirmentYear=function(birthyear,name){
//     const age=calcage(birthyear)
//     const retirment=65-age;
//     if(retirment>0){
//        console.log(`mr ${name} you retired after ${retirment} years later`)
//         return retirment
//     }
//     else{
//         return -1
//     }
//  return name
// }

// console.log(calculateRetirmentYear(1992,'surafel'))




// coding challenge 4
// const calcAverage=(num1,num2,num3)=>{
//     return (num1+num2+num3)/3
// }
// let averagedolphinResult=calcAverage(44,23,71)


// let averagekoalasResult=calcAverage(65,54,49)
// console.log(averagedolphinResult,averagekoalasResult)


// const chickWinner=(avgDolphin,avgkoalas)=>{
//     if(avgDolphin>=2*avgkoalas){
//         console.log('dolphin is the winner🏆')
//     }
//     else if(avgkoalas>=2*avgDolphin){
//         console.log('Koalas is the winner🏆')
//     }
//     else{
//         console.log('no team is the winner')
//     }
// }

// const winer=chickWinner(averagedolphinResult,averagekoalasResult);


// averagedolphinResult=calcAverage(85,54,41)
// averagekoalasResult=calcAverage(23,34,27)


// const win=chickWinner(averagedolphinResult,averagekoalasResult)
// console.log(win)



// array fundamental
// array is the javascript datastructer  types which holds index type data

// find the number of array
let nums=[1,23,3,4,56]
// console.log(nums.length)
nums[1]="surafel"
// array modification the value by index value
// console.log(nums)

// array is mutable types 
// let birthyear=[1992,2025]
// console.log(birthyear[1]-birthyear[0])


// array opertion
// let frainds=["abel","nebel","natan",'Ephrame'];
// console.log(frainds)
//1. push method these method is used to add the last index of he array
// frainds.push("arsema");
// console.log(frainds)




// 2. pop method these method is used to remove the last arry of the list-group

// frainds.pop();

// console.log(frainds);


//3. unshift method is used add array at the begning of the arrays

// frainds.unshift("ethiopia")
// console.log(frainds)



// 4. shift method is used to remove the first array of the elements

// frainds.shift()
// console.log(frainds)



// 5. indexof  is used to find which index of the element is located accordion

// console.log(frainds.indexOf("surafel"))


// 6. include method used to the element is avilable or not avilable to the array
// console.log(frainds.includes("natan"))




// $$$$$ coding challenges
// let bill=430;
// let tip=bill<=300 && bill >=50 ? bill*0.15 : bill * 0.2;
// console.log(`the bill was ${bill} ,then the tip was ${tip} and the total value was ${bill + tip}`)

// let bill;
// const calcTip=(bill)=>{
//     let tip=bill<=300 && bill >=50 ? bill*0.15 : bill * 0.2;
//     console.log(`the bill was ${bill} ,then the tip was ${tip} and the total value was ${bill + tip}`)
// }
// calcTip(100)







// object is the other types of data structure  key value pairs
// let info={
//     name:"surafel",
//     age:23,
//     education:"msc",
//     number:[1,2,3,4,5]
// };
// object is he fundamental type of dsa

// console.log(info.name);
// console.log(info.age);
// console.log(info.education);
// console.log(info.number);



// there two types of object notation 
// 1. dot notation
// 2. bracket notation
// 1. dot notation
// console.log(info.name)

// 2. bracket notation
// console.log(info["age"])


// mastering vscode 


//mastering vscode
// 1. collapse the side bar by using Ctrl + B cmd 
// 2.  open the fine inside the vscode by three ways accordion
// => the first way is click the cmd command and open the project folder after that write the word code and space to dot
// 2. by using inside the vscode and open file img-thumbnail
// 3. the third way to open the vscode is by using drag and drop to the vscode accordion



// vscode is the best code editor for all programming lang





// const a=12
// function sum(a,b){
//     console.log("hi there are you ok ?")
//     console.log("hi there are you ok ?")
//     console.log("hi there are you ok ?")
//     console.log("hi there are you ok ?")
//     console.log("hi there are you ok ?")
//     console.log("hi there are you ok ?")

//     return a=b
// }

// const val=sum(12,23);

// fundamental of javascript

// let names=prompt("enter you age")
// console.log(names)
// function sayName(name){
//     if(name.length >5){
//        console.log("your name length is greater than 5")
//     }
//     else{
//         console.log("your name is less than 5")
//     }
    
// }
// sayName(name)







// project five find the body mass index in javascript
// sample data Height=1.78, weight=70kg
// formula bmi=weight in kg/(height * height)


// declare the function 
// const height=1.8
// const weight=67
// let bmical=weight/(height * height)
// function bmi(){
//     if(bmical <=18.5){
//         console.log("you are under weight")
//     }
//     else if(bmical<=21.5){
//         console.log("you are normal bmi")
//     }
//     else if(bmical <=27){
//         console.log("you are overweight")
//     }
//     else{
//         console.log("you are obisity")
//     }
//     return bmical;
// }
// let res=bmi()
// console.log(res);




// let salary =9960;
// let tax;
// function netSalary(){
//     if(salary <= 600){
//       return    salary
//     }
//     else if(salary>600 && salary <=3000){
//         tax=salary * 0.1
//         console.log(salary)
//     }
//     else if(salary>3000 && salary <=6000){
//         tax=salary * 0.15
//         salary =salary-tax
//         console.log(tax)
//     }

// }



// const surafel={
//     name:"surafel",
//     birthYear:1992,
//     currentYear:2025,
//     calcAge:function(){
//         return this.currentYear -this.birthYear;
//     },
// }
// console.log(surafel.calcAge());
// console.log(surafel)




// challenge one please excute the object and the information app  based on the gevel information and compare it the two person bmi 
// declare surafel objects 
// const surafel={
//  fullName:"surafel mengist",
//  weight:68,
//  height:1.8,
//  bmiCalc:function (){
//     return this.weight /(this.height * this.height)
// }

//  }
// //  seclare biruk objects
// const biruk={
//     fullName: "Biruk Mengist",
//     weight: 78,
//     height:1.74,
//     bmiCalc:function (){
//         return this.weight /(this.height * this.height)
//     }
// }


// function compareBmi(surafel,biruk){
//     if(surafel.bmiCalc() > biruk.bmiCalc()){
//          console.log(`${surafel.fullName} has a higher Bmi (${surafel.bmiCalc() .toFixed(2)}) than ${biruk.fullName} (${biruk.bmiCalc().toFixed(2)})`);
//     }

// else if(surafel.bmiCalc()< biruk.bmiCalc()){   
//   console.log(`${biruk.fullName} has a higher Bmi (${biruk.bmiCalc().toFixed(2)}) than ${surafel.fullName} (${surafel.bmiCalc().toFixed(2)})`)
// }
// else{
//     console.log(`${surafel.fullName} and  ${biruk.fullName} have The same Bmi (${surafel.bmiCalc().toFixed(2)})`);
// }
// }
// compareBmi(surafel,biruk);








// these is the amazing tiopics of javascript releted with the object litral







