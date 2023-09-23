

var number = function(busStops){
    let inBus = 0;
    busStops.forEach(inOut => {
        inBus=inBus+inOut[0]-inOut[1];
    });
    return inBus !== 0 && inBus>0 ? inBus : 0;
  }

  console.log(number([[0,0]]))