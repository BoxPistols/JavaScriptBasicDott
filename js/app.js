'use strict';
{

  // const ul = document.querySelector('ul');
  let ul;
  ul = document.querySelector('ul');
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

  const box = document.querySelector('.box');
  // box.className = 'box bd_pink';

  // box.classList.add('bd_pink');
  // box.classList.remove('bd_pink);

  box.classList.toggle('bd_pink');

  const objP = document.createElement('p');
  objP.textContent = 'Hello P!';
  document.body.appendChild(objP);

  const objh2 = document.createElement('h2');
  objh2.textContent = 'Hello h2!';
  document.body.insertBefore(objh2, ul);

  const copy = objP.cloneNode(true);
  document.body.insertBefore(copy, objh2);

  const text = document.querySelector('input[type="text"]');
  const textarea = document.querySelector('textarea');

  console.log(text.value);
  console.log(textarea.value);

  //  End
}