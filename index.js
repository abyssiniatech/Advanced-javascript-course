const ageCalculator={
    calculateAge : function(birthYear){
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear
    },
    displayAge:function (birthYear){
       const age = this.calculateAge(birthYear);
       console.log(`i am ${age} years old`)

    }


}

ageCalculator.displayAge(1992);


