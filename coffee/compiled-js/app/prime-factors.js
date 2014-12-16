(function() {

  window.generate = function(n) {
    var candidate, primes;
    primes = [];
    candidate = 2;
    while (n > 1) {
      while (n % candidate === 0) {
        primes.push(candidate);
        n /= candidate;
      }
      candidate++;
    }
    return primes;
  };

}).call(this);
