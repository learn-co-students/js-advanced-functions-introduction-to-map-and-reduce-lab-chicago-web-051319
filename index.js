// Your code here
function mapToNegativize(sourceArray){
  let newArray = []
  sourceArray.forEach((el) => {
    el = -el
    newArray.push(el)
  })
  return newArray
}

function mapToNoChange(sourceArray){
  let newArray = []
  sourceArray.forEach((el) => {
    newArray.push(el)
  })
  return newArray
}

function mapToDouble(sourceArray){
  let newArray = []

  sourceArray.forEach((el) => {
    el=el*2
    newArray.push(el)
  })
  return newArray
}

function mapToSquare(sourceArray){
  let newArray = []

  sourceArray.forEach((el) => {
    el=el*el
    newArray.push(el)
  })
  return newArray
}

function reduceToTotal(sourceArray, startingPoint){
  let total = 0
  sourceArray.forEach((num) => {
    total = total+num
  })
  if (startingPoint){
  return total + startingPoint}else {
    return total
  }
}

function reduceToAllTrue(sourceArray){
  if (sourceArray.includes(false)){
    return false
  }else {
    return true
  }
}

function reduceToAnyTrue(sourceArray){
  if (sourceArray.includes(true)){
    return true
  }else {
    return false
  }

}
