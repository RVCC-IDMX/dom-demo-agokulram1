/* ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES 

Video by Brad Traversy
JavaScript Crash Course For Beginners
https://youtu.be/hdI2bqOjy3c?t=4228 

Start at 1:10:29
 */


// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element
// console.log(document.querySelectorAll('.item'));
//console.log(getElementsByClassName('li'))

const ul = document.querySelector('.items');

// ul.remove();

// ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
const myForm = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#my-form');
myForm.addEventListener('submit', onSubmit);
const btn = document.querySelector('.btn');
btn.getElementsByClassName.background = 'red';
btn.addEventListener('click',(e) =>{
    e.preventDefault();
    console.log('e.target.classname');
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>'

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`$
        {nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        //Clear fields 
        nameInput.value = '';
        emailInput.value = '';
    }
});