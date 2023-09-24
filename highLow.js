function highAndLow(numbers){

    const toArr = numbers.split(' ');

    const max = Math.max(...toArr)
    const min = Math.min(...toArr)
    
    return (max +' '+ min);
  }

  highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")