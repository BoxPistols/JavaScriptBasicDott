// 関数宣言
/*
function sum(x, y, z) { // 関数(仮引数)
  //console.log(x + y + z);
  return x + y + z; // 処理結果を値で返したい
  // return以降は何も機能しない
}
*/

// 関数式 function()無名関数
const sum = function(x, y, z) { // 関数(仮引数)
  //console.log(x + y + z);
  return x + y + z; // 処理結果を値で返したい
  // return以降は何も機能しない
};

/*
 returnにすることで、
 sum関数自体を式に出来るようになった
 関数名(実引数, 実引数, ...)
 */
const total = sum(12, 3, 4) + sum(2, 3, 4);
console.log(total);
