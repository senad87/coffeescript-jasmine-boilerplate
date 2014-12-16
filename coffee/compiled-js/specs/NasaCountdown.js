(function() {

  describe("Nasa Countdown", function() {
    it("should return empty array whem 0 passed", function() {
      return expect(countdown(0)).toEqual([]);
    });
    it("should return [3,2,1,0] when number 3 is passed", function() {
      return expect(countdown(3)).toEqual([3, 2, 1, 0]);
    });
    return it("should return [10,9,8,7,6,5,4,3,2,1,0] when number 10 is passed", function() {
      return expect(countdown(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });
  });

}).call(this);
