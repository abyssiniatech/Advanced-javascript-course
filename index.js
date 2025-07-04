class Teacher{
  constructor(name,age){
      this.name =name;
      this.age= age;
  }

}
class Student extends Teacher{
  constructor(name,age,grade){
    super(name,age)
    this.grade= grade;
  }
}



const person1=new Teacher("yared",29)
const person2=new Student("Abel",12,11)
console.log(person1)
console.log(person2)