 const info=() =>{
    return {
        name:'surafel',
        age:25,
        country:'Ethiopia',
        city:'Addis Ababa'
    }
 }

 const great=(info)=>{
        return `Hello my name is ${info.name}  and  i am ${info.age} years old, i live in ${info.city} ,  and i am from ${info.country}`
 }

 console.log( great(info()));