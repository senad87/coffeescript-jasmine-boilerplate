(function() {

  window.wellcome = function(fullName, gender, isKnighted) {
    var title;
    title = "Ms.";
    if (gender === "male") {
      title = "Mr.";
    }
    if (isKnighted) {
      title = "Sir";
    }
    return "Hello " + title + " " + (getLastNameFrom(fullName));
  };

  window.getLastNameFrom = function(fullName) {
    return fullName.split(" ")[1];
  };

}).call(this);
