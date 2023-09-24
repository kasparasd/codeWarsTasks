function squareDigits(num){
    const splitedNum = Array.from(num.toString()).map(Number)
    
    function multiply(input) {
        return input*input;
    }
    const newArray = Number(splitedNum.map(multiply).join(""))

    return newArray;
  }

  squareDigits(3212)