function countPositivesSumNegatives(input) {
    if(!Array.isArray(input) || input.length===0 || (input.includes(null) && input.length===1) || ( Math.max(...input)===0 && Math.min(...input)===0)){
        return [];
    } else {
      const positive = input.filter(x=> x>0).length;
    const negative = input.filter(x=> x<0);

    const newArray = [];

    let negativeTotalSum = 0;


    if(negative.length===0 || negative === null){
         negativeTotalSum = 0;
        
    } else if (negative.length >0){
  
        function calcNegativeSum(negative){  
            negativeTotalSum = negative.reduce((accumulator, currentValue)=>{
                return accumulator + currentValue;
             }) 
           }
           calcNegativeSum(negative);
    }


    newArray.push(positive, negativeTotalSum);
    return newArray;
    }
    
    
  }

  console.log(countPositivesSumNegatives([0,0,0]));