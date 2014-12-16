describe "StringCalculator", ->

  beforeEach ->
    @calc = new StringCalculator()

  it "should return zero for empty string", ->
    calc = new StringCalculator("")
    expect(calc.add()).toBe 0
    
  it "should return one when one is passed", ->
    calc = new StringCalculator("1")
    expect(calc.add()).toBe 1
    
  it "should return 3 for string 1,2 passed", ->
    calc = new StringCalculator("1,2")
    expect(calc.add()).toBe 3
    
  it "should return sum for any number of values in string", ->
    calc = new StringCalculator("1,2,3,4,5,6,7")
    expect(calc.add()).toBe 28
  
  it "should accept new line char as delemiter", ->
    calc = new StringCalculator("1\n2,3\n4,5,6,7,8")
    expect(calc.add()).toBe 36
    
  it "should accept delimiter as first char in string separated with new line char from rest of the numbers", ->
    calc = new StringCalculator(";\n1;2;3")
    expect(calc.add()).toBe 6
    
  it "should throw exception if negative number is passed and include that number in exception message", ->
    calc = new StringCalculator("-2")
    expect(calc.add.bind(calc)).toThrowError "Negative Numbers -2 are not allowed";
    
  it "should throw exception if multiple negative nubmers are passed and include them all in exeptioin message", ->
    calc = new StringCalculator("-2,-4,-5")
    expect(calc.add.bind(calc)).toThrowError "Negative Numbers -2,-4,-5 are not allowed"
    
  it "should check for presens of element in array", ->
    expect(@calc.does(1).existsIn([1,23,4,5])).toBe true
    
  it "should map", ->
    expect(map("test")([1, 2, 3])).toEqual ['test', [1, 2, 3]]
    
  it "should check if num is odd", ->
    expect(@calc.is(3).oddNumber()).toBeTruthy()
  
    