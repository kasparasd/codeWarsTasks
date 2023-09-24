function basicOp(operation, value1, value2)
{
    if(operation === '+'){
       const result = Number(value1)+Number(value2)
       return result
    } else if (operation === '-'){
        const result = Number(value1)-Number(value2)
       return result
    } else if (operation === '*'){
        const result = Number(value1)*Number(value2)
       return result
    } else if (operation === '/'){
        const result = Number(value1)/Number(value2)
       return result
    }
    
  return 
}
console.log(basicOp('+', 4, 7))