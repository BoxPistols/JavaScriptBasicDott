let el = document.querySelector('.content');


// pure js
// const sum = function (a, b, c) {
//   return a + b + c
// };

// arrow js
// const sum = (a, b, c) => {
//   return a + b + c
// };

// 省略表現
const sum = (a, b, c) =>  a + b + c;

const result = sum(12, 3, 4);
el.innerHTML = result;

// const d = function (a) {
//   return a * 2;
// };
const d = a => a * 2;
el.innerHTML = d(12);
