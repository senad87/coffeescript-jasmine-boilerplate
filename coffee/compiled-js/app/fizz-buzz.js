(function() {

  window.FizzBuzz = (function() {

    function FizzBuzz() {}

    FizzBuzz.prototype.results = new Array();

    FizzBuzz.prototype.currentNum = null;

    FizzBuzz.prototype.print = function() {
      var num, _i;
      for (num = _i = 1; _i <= 100; num = ++_i) {
        this.collectAnswer(num);
      }
      return this.results.join(",");
    };

    FizzBuzz.prototype.collectAnswer = function(num) {
      this.currentNum = num;
      return this.results.push(this.getAnswer());
    };

    FizzBuzz.prototype.getAnswer = function() {
      if (this.isDivisibleByThreeAndFive()) {
        return "FizzBuzz";
      }
      if (this.isDivisibleBy(3)) {
        return "Fizz";
      }
      if (this.isDivisibleBy(5)) {
        return "Buzz";
      }
      return this.currentNum;
    };

    FizzBuzz.prototype.isDivisibleByThreeAndFive = function() {
      return this.isDivisibleBy(3) && this.isDivisibleBy(5);
    };

    FizzBuzz.prototype.isDivisibleBy = function(divisor) {
      return this.currentNum % divisor === 0;
    };

    FizzBuzz.prototype.isThe = function(product) {
      return {
        Defined: function() {
          return product !== void 0;
        }
      };
    };

    return FizzBuzz;

  })();

}).call(this);
