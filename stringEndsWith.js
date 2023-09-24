function solution(str, ending){
    const string = str.split("")
    const end = ending.split("")
    const endLength = end.length;

    let i = -1;

    let endingArrayT = [];
    let stringA = [];

    while (i>=-endLength){
        const endingArray = end[end.length + i]
        const stringArray = string[string.length + i]
        endingArrayT.push(endingArray);
        stringA.push(stringArray);
        i--
        
    }
    // return endingArrayT === stringA ? true : false;
    return JSON.stringify(endingArrayT) === JSON.stringify(stringA) ? true:false;
  
  }

  solution('abcde', 'cde')