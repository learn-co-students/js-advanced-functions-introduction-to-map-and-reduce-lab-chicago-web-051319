// Your code here
function mapToNegativize(sourceArray){
  let newA = [];
  for (let i =0; i< sourceArray.length; i++){
    newA.push(sourceArray[i] * (-1))
  }
  return newA
};

function mapToNoChange(sourceArray){
  let newArray = sourceArray
  return newArray
};

function mapToDouble(sourceArray){
  let newA = [];
  for (let i =0; i< sourceArray.length; i++){
    newA.push(sourceArray[i] * 2)
  }
  return newA
};

function mapToSquare(sourceArray){
  let newA = [];
  for (let i =0; i<sourceArray.length; i++){
    newA.push(sourceArray[i] ** 2)
  }
  return newA
}

function reduceToTotal(sourceArray, startingPoint){
  let total = 0
  if (startingPoint){
    total += startingPoint;
  for(let i=0; i<sourceArray.length; i++){
    total+= sourceArray[i]
  }}
  else {
    for(let i=0; i<sourceArray.length; i++){
      total+= sourceArray[i]
  }}
  return total
}

function reduceToAllTrue(sourceArray){
  let answer = true
  for (let i =0; i<sourceArray.length; i++){
    if (sourceArray[i] === true){
      answer = true
    }
    else if (sourceArray[i] === false){
      answer = false
    }
  }
  return answer
}

function reduceToAnyTrue(sourceArray){
  for (let i =0; i<sourceArray.length; i++){
    if (sourceArray[i] === true){
      return true
    }
  }
  return false
}
