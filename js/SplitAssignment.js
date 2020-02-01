{
  const el = document.querySelector('.content')

  let hog = 120
  const score = [hog, 40, 60, 80]
  console.log(`Score: ${score}`)

  score.push(1200, 1500) // 末尾に追加
  // score.shift()
  // pop
  // 配列[2番目] = 3つ目 から 2つ削除 = 60, 80 して、そこに item追加
  score.splice(2, 2, 123, 456)

  for (let i = 0; i < score.length ; i++) {
    el.insertAdjacentHTML('beforebegin', (`<h2>${i + 1} : Score: ${score[i]}</h2>`) )
  }

}
