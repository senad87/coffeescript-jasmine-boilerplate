(function() {

  describe("StringCalculator", function() {
    beforeEach(function() {
      return this.calc = new StringCalculator();
    });
    it("should return zero for empty string", function() {
      var calc;
      calc = new StringCalculator("");
      return expect(calc.add()).toBe(0);
    });
    it("should return one when one is passed", function() {
      var calc;
      calc = new StringCalculator("1");
      return expect(calc.add()).toBe(1);
    });
    it("should return 3 for string 1,2 passed", function() {
      var calc;
      calc = new StringCalculator("1,2");
      return expect(calc.add()).toBe(3);
    });
    it("should return sum for any number of values in string", function() {
      var calc;
      calc = new StringCalculator("1,2,3,4,5,6,7");
      return expect(calc.add()).toBe(28);
    });
    it("should accept new line char as delemiter", function() {
      var calc;
      calc = new StringCalculator("1\n2,3\n4,5,6,7,8");
      return expect(calc.add()).toBe(36);
    });
    it("should accept delimiter as first char in string separated with new line char from rest of the numbers", function() {
      var calc;
      calc = new StringCalculator(";\n1;2;3");
      return expect(calc.add()).toBe(6);
    });
    it("should throw exception if negative number is passed and include that number in exception message", function() {
      var calc;
      calc = new StringCalculator("-2");
      return expect(calc.add.bind(calc)).toThrowError("Negative Numbers -2 are not allowed");
    });
    it("should throw exception if multiple negative nubmers are passed and include them all in exeptioin message", function() {
      var calc;
      calc = new StringCalculator("-2,-4,-5");
      return expect(calc.add.bind(calc)).toThrowError("Negative Numbers -2,-4,-5 are not allowed");
    });
    it("should check for presens of element in array", function() {
      return expect(this.calc.does(1).existsIn([1, 23, 4, 5])).toBe(true);
    });
    it("should map", function() {
      return expect(map("test")([1, 2, 3])).toEqual(['test', [1, 2, 3]]);
    });
    return it("should check if num is odd", function() {
      return expect(this.calc.is(3).oddNumber()).toBeTruthy();
    });
  });

}).call(this);
