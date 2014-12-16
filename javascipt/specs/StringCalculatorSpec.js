describe("StringCalculatorSpec", function () {

  it("should return zero 0 for empty string", function () {
    var calc = calculator("");
    expect(calc.add()).toBe(0);
  });

  it("should return zero 1 if '1' passed", function () {
    var calc = calculator("1");
    expect(calc.add("1")).toBe(1);
  });

  it("should handle unknown number of numbers", function () {
    var calc = calculator("1,2,3");
    expect(calc.add()).toBe(6);
  });

  it("should support new line breaks as delimiters", function () {
    var calc = calculator("1\n2,3");
    expect(calc.add("1\n2,3")).toBe(6);
  });

  it("should support custom delimiter", function () {
    var calc = calculator(";\n1;2;3;4;5");
    expect(calc.add(";\n1;2;3;4;5")).toBe(15);
  });

});