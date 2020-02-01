'use strict';

{
  let el = document.querySelector('.content');


  const scores = [80, 90, 40, 70];
  // scores.push(60,50); // 末尾に追加
  // scores.shift(); // 先頭削除

  scores.splice(3, 1, 777, 3);
  // (start: x, deleteCount: x, items: x , x)
  // 先頭[0]番目から１つ要素を削除して、末尾に要素を追加

  // for (let i = 0; i < 3; i++) {
  for (let i = 0; i < scores.length ; i++) {
    console.log(`${i}: ${scores[i]}`)
    el.innerHTML = `${i} : ${scores}`;
  }


}
