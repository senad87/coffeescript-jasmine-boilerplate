describe "Nasa Countdown", -> 
  
  it "should return empty array whem 0 passed", ->
    expect(countdown(0)).toEqual []
    
  it "should return [3,2,1,0] when number 3 is passed", ->
    expect(countdown(3)).toEqual [3,2,1,0]
    
  it "should return [10,9,8,7,6,5,4,3,2,1,0] when number 10 is passed", ->
    expect(countdown(10)).toEqual [10,9,8,7,6,5,4,3,2,1,0]