describe('my own map-like methods', function() {
 describe("mapToNegativize returns an array with all values made negative", function() {
   it("transforms correctly", function(){
      expect(mapToNegativize([1, 2, 3, -9])).to.eql([-1, -2, -3, 9])
   })

  describe("mapToNoChange returns an array with the original values", function() {
    it("transforms correctly", function(){
      dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
      expect(mapToNoChange(dune)).to.eql(dune)
    })
  })

  describe("mapToDouble returns an array with the original values multiplied by 2", function() {
    it("transforms correctly", function(){
      expect(mapToDouble([1, 2, 3, -9])).to.eql([2, 4, 6, -18])
    })
  })


  describe("mapToSquare returns an array with the original values squared", function() {
    it("transforms correctly", function(){
      expect(mapToSquare([1, 2, 3, -9])).to.eql([1, 4, 9, 81])
    })
  })
 })
})

describe('my own reduce-like methods', function() {
  describe("reduceToTotal returns a running total when not given a starting point", function() {
    it("reduces correctly", function(){
      sourceArray = [1,2,3]
      expect(reduceToTotal(sourceArray)).to.equal(6)
    })
  })

  describe("reduceToTotal returns a running total when given a starting point", function() {
    it("reduces correctly", function(){
      sourceArray = [1,2,3]
      startingPoint = 100
      expect(reduceToTotal(sourceArray, startingPoint)).to.equal(106)
    })
  })

  
})
