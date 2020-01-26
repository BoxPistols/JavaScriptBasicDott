const x = 2;

function f() {
  const x = 1; // {  の中のみ適応 } もし無ければグローバルな変数を読みに行く↑ = 2
  console.log(x); // 1
}

f(); // 1 or もし無ければグローバルな変数を読みに行く↑ = 2
console.log(x); // 2 { この中はPrivateなので読まない }
