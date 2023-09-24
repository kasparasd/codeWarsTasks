function isTriangle(a,b,c)
{
    let arrayNumbers = [];
    arrayNumbers.push(a,b,c);

    const [smallest, secondSmallest, big] = arrayNumbers.sort((a, b) => a - b);

   return smallest + secondSmallest > big ? true:false;
}

console.log(isTriangle(7,2,2))