function RandomNumber(){
   let random=Math.floor(Math.random()*10)
   if(random<=5){
         console.log("the random number is less than or equal to five " + random)
   }
   else{
      console.log(`the number is greater than five ${random}`)
   }
}
RandomNumber()