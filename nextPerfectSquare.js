function findNextSquare(sq) {
    const isCurrNumInteger = Number.isInteger(Math.sqrt(sq))
    const nextSquare = (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1)
    return !isCurrNumInteger ? -1 : nextSquare;
  }

  console.log(findNextSquare(121));