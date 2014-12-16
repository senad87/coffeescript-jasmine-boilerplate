(function() {

  window.countdown = function(start) {
    var list, num, _i, _j, _len, _ref, _results;
    list = [];
    if (start !== 0) {
      _ref = (function() {
        _results = [];
        for (var _j = 0; 0 <= start ? _j <= start : _j >= start; 0 <= start ? _j++ : _j--){ _results.push(_j); }
        return _results;
      }).apply(this).reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        num = _ref[_i];
        list.push(num);
      }
    }
    return list;
  };

}).call(this);
