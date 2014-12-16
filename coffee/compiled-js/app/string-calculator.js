(function() {

  window.StringCalculator = (function() {

    StringCalculator.prototype.delimiter = ",";

    function StringCalculator(nums) {
      this.nums = nums;
    }

    StringCalculator.prototype.add = function() {
      if (this.nums !== "") {
        this.handleDelimiter();
        return this.sumUp();
      } else {
        return 0;
      }
    };

    StringCalculator.prototype.handleDelimiter = function() {
      if (this.isFirstCharDelimiter()) {
        this.setDelimiter();
        this.removeDelimiterFromBeginning();
      }
      return this.replaceNewLineDelimiters();
    };

    StringCalculator.prototype.isFirstCharDelimiter = function() {
      return this.isFirstCharNonNumeric() && this.isSecondCharNewLineChar();
    };

    StringCalculator.prototype.isFirstCharNonNumeric = function() {
      return isNaN(this.nums[0]);
    };

    StringCalculator.prototype.isSecondCharNewLineChar = function() {
      return this.nums[1] === "\n";
    };

    StringCalculator.prototype.setDelimiter = function() {
      return this.delimiter = this.nums[0];
    };

    StringCalculator.prototype.removeDelimiterFromBeginning = function() {
      return this.nums = this.nums.slice(2, this.nums.length);
    };

    StringCalculator.prototype.replaceNewLineDelimiters = function() {
      return this.nums = this.nums.replace(/\n/g, this.delimiter);
    };

    StringCalculator.prototype.sumUp = function() {
      var negativeNums, num, numFloat, numsArray, result, _i, _len;
      result = 0;
      negativeNums = [];
      numsArray = this.nums.split(this.delimiter);
      for (_i = 0, _len = numsArray.length; _i < _len; _i++) {
        num = numsArray[_i];
        numFloat = parseFloat(num);
        result += numFloat;
        this.push(numFloat).inThe(negativeNums);
      }
      if (negativeNums.length > 0) {
        throw new Error("Negative Numbers " + (negativeNums.join()) + " are not allowed");
      }
      return result;
    };

    StringCalculator.prototype.createNegativeNumsArray = function(negativeNums, num) {
      if (num < 0) {
        return negativeNums.push(num);
      }
    };

    StringCalculator.prototype.push = function(num) {
      return {
        inThe: function(negativeNums) {
          if (num < 0) {
            return negativeNums.push(num);
          }
        }
      };
    };

    StringCalculator.prototype.does = function(number) {
      return {
        existsIn: function(array) {
          return array.indexOf !== -1;
        }
      };
    };

    StringCalculator.prototype.is = function(num) {
      return {
        oddNumber: function() {
          return !!(num % 2);
        }
      };
    };

    return StringCalculator;

  })();

  window.map = function(f) {
    return function(list) {
      return [f, list];
    };
  };

}).call(this);
