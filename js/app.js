'use strict';
{
  // const ul = document.querySelector('ul');
  const ul = document.querySelector('ul');
  console.log(ul.parentNode);
  console.log(ul.children[3]);
  for (let i = 0; i < ul.children.length; i++) {
    console.log(ul.children[i].textContent);
  }

//
  const h1 = document.querySelector('h1');
  console.log(h1.title);
  h1.title = 'Change!';
  h1.style.color = "orange";



}