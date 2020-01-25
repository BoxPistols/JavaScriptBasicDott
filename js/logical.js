'use strict'

const score = 60
const name = 'mike'

if(score >= 50){
  if(name === 'mike'){
    console.log('Good!!')
  }
}

// 同じ条件文で、論理演算子
if(score >= 50 && name === 'mike'){
  console.log('LON!')
}

