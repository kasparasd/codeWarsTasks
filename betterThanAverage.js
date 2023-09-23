function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    const classAvg = classPoints.reduce((acc, curr)=>{
        return acc+curr
    })/classPoints.length;


    return classAvg < yourPoints ? true : false;
  }
  
  console.log(betterThanAverage([2,3],1))