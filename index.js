// Your code here
function mapToNegativize(sourceArray){
    let negatives = []
    sourceArray.forEach(number =>{
        let negativeNum = number * -1;
        negatives.push(negativeNum);
    })
    return negatives;
}

function mapToNoChange(sourceArray){
    const newArray = [...sourceArray]
    return newArray;
}

function mapToDouble(sourceArray){
    let doubles = []
    sourceArray.forEach(number =>{
        let doubleNum = number * 2;
        doubles.push(doubleNum);
    })
    return doubles;
}

function mapToSquare(sourceArray){
    let squares = []
    sourceArray.forEach(number =>{
        let squareNum = number ** 2;
        squares.push(squareNum);
    })
    return squares;
}

function reduceToTotal(sourceArray, startingPoint){
    let total = 0;
    if (!startingPoint){
        sourceArray.forEach(number=>{
            total += number;
        })
    }
    else if (startingPoint){
        total += startingPoint
        sourceArray.forEach(number=>{
            total += number;
        })
    }
    return total;
}

function reduceToAllTrue(sourceArray){
    let result = true

    sourceArray.forEach(index =>{
        if(index == result){
            result = true;
        }
        else if (index == false){
            result = false
        }
    })
    return result;
}

function reduceToAnyTrue(sourceArray){
    let result = false

    sourceArray.forEach(index =>{
        if(index == true){
            result = true;
        }
    })
    return result;
}