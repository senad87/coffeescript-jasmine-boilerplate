function calculator(nums) {

  var total = 0;
  var delimiter = ",";

  function handleDelimiter() {
    if (isFirstCharDelemiter(nums)) {
      delimiter = nums[0];
      nums = nums.slice(2, nums.length);
    }
    nums = nums.replace(/\n/g, delimiter);
  }

  function splitAtDelimiter() {
    nums = nums.split(delimiter);
  }

  function isFirstCharDelemiter(nums) {
    return nums[1] === "\n" && isNaN(nums[0]);
  }

  var public = {
    add: function () {
      if (nums !== "") {
        
        handleDelimiter();
        splitAtDelimiter();

        nums.forEach(function (num) {
          total += parseFloat(num);
        });

      }

      return total;
    }
  };

  return public;

}

