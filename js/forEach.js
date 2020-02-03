{
// import chalk from 'chalk'
 const score = [40, 60, 80, 90, 120]
  // console.log(chalk.orange(score))
 score.forEach((foo, index) => {
   if(foo % 20 === 0) {
     document.write(`${index + 1}: ${foo} <br>`)
   }
 })
}
