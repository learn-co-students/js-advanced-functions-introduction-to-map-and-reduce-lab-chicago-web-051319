// Your code here
function mapToNegativize (arr) {
    return arr.map(e => -e )
}
function mapToNoChange (arr) {
    return arr.map(e => e )
}

function mapToDouble (arr) {
    return arr.map(e => e * 2)
}

function mapToSquare (arr) {
    return arr.map(e => e ** 2)
}

function reduceToTotal (arr, start=0) {
    return arr.reduce((a, c)=>  a + c, start)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }

sourceArray = [1, 2, true, "razmatazz", false]