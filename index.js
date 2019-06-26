function produceDrivingRange(range){
  return function(street1, street2){
    const difference=range-Math.abs(parseInt(street1)- parseInt(street2))
    if (difference>=0){
      return `within range by ${difference}`
    }else{
      return `${-difference} blocks out of range`
    }
  }
}

function