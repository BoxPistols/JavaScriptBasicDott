for (let i = 0; i <= 10; i++) {
  if (i === 2 || i === 4 || i % 3 ===0){
    continue
  }
  if(i >= 9){
    break
  }
  console.log(i);
}
