let el = document.querySelector('.content');

for (let i = 0; i <= 10; i++) {
  console.log(`Hello: ${i}`);
  el.innerHTML = (`Hello: ${i}`);
}
