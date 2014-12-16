describe "FizzBuzz", ->
  
  beforeEach ->
    this.fizzBuzz = new FizzBuzz()
    
  it "should replace all numbers devisible by:
      3 with the word 'Fizz', 
      5 with the word 'Buzz'
      both 3 and 5 should be replaced with 'FizzBuzz' word (testing first 15)", ->
      
    expect(this.fizzBuzz.print().slice(0, 57)).toBe "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz"
    
  it "should verify is product defined", ->
    expect(this.fizzBuzz.isThe("product").Defined()).toBe true
    