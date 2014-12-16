window.wellcome = (fullName, gender, isKnighted)->

  title = "Ms."
  title = "Mr." if gender is "male"
  title = "Sir" if isKnighted

  "Hello #{title} #{getLastNameFrom fullName}"
  
window.getLastNameFrom = (fullName)->
  fullName.split(" ")[1]