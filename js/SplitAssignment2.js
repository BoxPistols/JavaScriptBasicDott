const el = document.querySelector('.content')
el.innerHTML = "分割代入"

const addDiv = document.createElement('div')
addDiv.className = 'sample'
el.appendChild(addDiv);

 /*
    分割代入
 */
const score = [40, 60, 80, 90, 120]

const[a,b, ...hoge] = score // hoge = 残りの配列

addDiv.insertAdjacentHTML('afterbegin',`${a} : ${b} : ${hoge}`)



