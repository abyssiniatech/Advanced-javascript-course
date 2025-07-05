// dom manipulation tutorials
// there are four ways selecting elements in the dom 
// 1. getElementById();
// 2. getElementByTagName();
// 3. getElementsByClassname();
// 4. querySelector();
// 5. querySelectorAll();



// example 1 GetElementByTagName();
const h1= document.getElementsByTagName('h1');
console.log(h1)

// example 2 getElementById()
const head1= document.getElementById('head1');
console.log(head1);



// example 3. getElementsByClassName()
const para= document.getElementsByClassName('para');
console.log(para)



// example 4  querySelector();
const para1=document.querySelector('.para');




// example 5 querySelectorAll();
const list =document.querySelectorAll('li');
console.log(list)