function wellcome(fullName, gender, knighted) {

  var title = "Ms. ";

  if (gender === "male") {
    title = "Mr. ";
    if (knighted) {
      title = "Sir ";
    }
  }
  
  return "Hello " + title + getLastNameFrom(fullName);
}

function getLastNameFrom(fullName) {
  return fullName.split(" ")[1];
}