{
  const el = document.querySelector('.content')

  const score = [20, 40, 60, 80]
  console.log(`Score: ${score}`)

  score.push(1200, 1500)
  score.shift()
  // pop

  for (let i = 0; i < score.length ; i++) {
    el.insertAdjacentHTML('beforebegin', (`<h2>${i + 1} : Score: ${score[i]}</h2>`) )}

}
