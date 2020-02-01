let el = document.querySelector('.content')
el.innerHTML = "演算子条件"
// let addDiv = document.createElement('div')
// addDiv.className = 'sample'
// el.appendChild(addDiv);
// addDiv.innerHTML = "inner要素"

// const post = "<h2>Test</h2>"
// el.insertAdjacentHTML('afterend', post )

const score =  30

score >= 20 ? el.insertAdjacentHTML('afterend', 'Win') : el.insertAdjacentHTML('afterend', 'Lose')



