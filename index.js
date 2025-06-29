// write javascript programming code to execute grade system  by using if else statement


function gradeSystem(){
    let mark=prompt("Enter your marks : ");
    mark=parseInt(mark);
    if(mark>=90 && mark <=100){
        console.log(`You got ${mark} marks and your grade is A+`);
    }
    else  if(mark>=85 && mark <90){
        console.log(`You got ${mark} marks and your grade is A`);
    }
    else if(mark>=80 && mark <=84){
        console.log(`You got ${mark} marks and your grade is A-`);
    }
    else if(mark>=75 && mark <=79){
        console.log(`You got ${mark} marks and your grade is B+`);
    }
   else if(mark>=70 && mark <=74){
        console.log(`You got ${mark} marks and your grade is B`);
    }
      else  if(mark>=65 && mark <=69){
        console.log(`You got ${mark} marks and your grade is B-`);
    }
     else if(mark>=60 && mark <=64){
        console.log(`You got ${mark} marks and your grade is C+`);
    }
     else  if(mark>=55 && mark <= 59){
        console.log(`You got ${mark} marks and your grade is C`);
    }
 else if(mark>=50 && mark <=54){
            console.log(`You got ${mark} marks and your grade is C-`);

 }
 else if(mark>=40 && mark <=49){
            console.log(`you got ${mark} marks and your grade is D`);
 }
    else if(mark >=0 && mark <=39){
         console.log(`you got ${mark} marks and your grade is F`);
 
    }
    else{
        console.log(" invalid input please enter the number between 0 to 100");
    }
 
}
gradeSystem();
