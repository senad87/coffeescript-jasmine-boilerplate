var FizzBuzz = (function () {

  function FizzBuzz() {
    this.results = [];
  }

  var fb = FizzBuzz.prototype;

  fb.print = function () {
    return this.collectResults().join(",");
  };

  fb.collectResults = function () {
    for (var n = 1; n <= 100; n++) {
      this.currentNum = n;
      this.results.push(this.getAnswer());
    }
    return this.results;
  };

  fb.getAnswer = function () {
    if (this.isDivisibleByThreeAndFive()) return "FizzBuzz";
    if (this.isDivisibleBy(3)) return "Fizz";
    if (this.isDivisibleBy(5)) return "Buzz";

    return this.currentNum;
  };

  fb.isDivisibleByThreeAndFive = function () {
    return this.isDivisibleBy(3) && this.isDivisibleBy(5);
  };

  fb.isDivisibleBy = function (divisor) {
    return this.currentNum % divisor === 0;
  };

  return FizzBuzz;

})();