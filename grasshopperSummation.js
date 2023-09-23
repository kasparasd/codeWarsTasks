var summation = function (num) {
  let sum = 0;
  

  for (let currNum = num; currNum > 0; currNum--) {
    sum = sum + currNum;
    
  }
  return sum;
}
console.log(summation(8));