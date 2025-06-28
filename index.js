const AgeCalculatorAfter10Years =function (birthYear){
   const currentYear=new Date().getFullYear();
   const age=currentYear -birthYear;
   let ageAfter10 = age+10
   console.log(`your age after 10 years ago will be ${ageAfter10}`)
}
AgeCalculatorAfter10Years(1992)