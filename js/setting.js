const el = document.querySelector('.content')
el.innerHTML = "演算子条件"
const addDiv = document.createElement('div')
addDiv.className = 'sample'
el.appendChild(addDiv);
addDiv.innerHTML = "inner要素"

el.insertAdjacentHTML('beforebegin', `<h2> ${sum(...other,1000)} </h2>` )


const score = [40, 60, 80, 90, 120]
const[a,b, ...hoge] = score // hoge = 残りの配列
addDiv.insertAdjacentHTML('afterbegin',`${a} : ${b} : ${hoge}`)


