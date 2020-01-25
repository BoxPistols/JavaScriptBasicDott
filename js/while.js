let el = document.querySelector('.content');

let hp = 100;
while (hp > 0){
  console.log(`${hp} left!`);
  hp -= 15
}

// もし初期値が最初からコープ外だった時
let hpMinus = -70;
do{
  // 1- 初期変数が一度だけ表示され
 console.log(`${hpMinus} left!`);
  hpMinus -= 15;
} while (hpMinus > 0); // 2- その後whileが稼働する


