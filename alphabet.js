
function printerError(s) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];
    const stringToArray = s.split('')
    let good = 0;
for (let index =0; index < stringToArray.length; index++) {
    if(alphabet.includes(stringToArray[index])) {
        good++;
    }
}
return stringToArray.length-good+"/"+stringToArray.length
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))