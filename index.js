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

function reduceToAllTrue (arr) {
    return arr.filter(x => !!x);
}

sourceArray = [1, 2, true, "razmatazz", false]