function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    
    let w = 0;
    let e = 0;
    
    walk.forEach(letter => {
      if (letter === 'n'){
        n+=1;
      } else if (letter === 's'){
        s+=1;
      } else if (letter === 'w'){
        w+=1;
      } 
      else if (letter === 'e'){
        e+=1;
      } 
    })
    
    if(n-s === 0 && w-e === 0 && walk.length===10){
      return true;
    } else return false;
  }
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

  
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

