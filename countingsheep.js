function count(sheeps){
    let sum=0;
    sheeps.forEach(sheep=>{
        if(sheep===true){
            sum++;
        }
    })
    console.log(sum);

    //OR

    const ats = sheeps.filter(word=>word === true).length
    console.log(ats);
}

count([undefined,null,false,true])

const words = ['p', 'o', 'k'];

const r = [words[2], words[1], words[0]];

console.log(r);



