function isIsogram(str){
    const toArray = str.toLowerCase().split('')
    const letterSet = new Set(toArray);

   return toArray.length === Array.from(letterSet).length ? true:false;

  }
  console.log(isIsogram("Dermatoglyphics"))

