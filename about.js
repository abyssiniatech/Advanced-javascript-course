// three text insertion method  inside the  html

// 1 textContent;
// 2.innerText;
// 3.innerHTML;

const head1 = document.getElementById('head1');
let textContent=head1.textContent = 'chnged text by textContent'
let innerHtml=head1.innerHTML = 'chnged text by innerHtml '
let innerText=head1.innerText = 'chnged text by innerText'


// execute the function
console.log(textContent);
console.log(innerHtml);
console.log(innerText)
