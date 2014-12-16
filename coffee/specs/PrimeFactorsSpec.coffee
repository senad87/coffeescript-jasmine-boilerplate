describe "PrimeFactorsSpec", ->
  it "should return empty array for 1", ->
    expect(generate(1)).toEqual []
    
  it "should return array with number 2 for number 2", ->
    expect(generate(2)).toEqual [2]
    
  it "should return array with number 3 for 3", ->
    expect(generate(3)).toEqual [3]
    
  it "should return array with numbers 2,2 for number 4", ->
    expect(generate(4)).toEqual [2,2]
    
  it "should return array with numbers 2,3 for number 6", ->
    expect(generate(6)).toEqual [2,3]
    
  it "should return array with numbers 2,2,2 for number 8", ->
    expect(generate(8)).toEqual [2,2,2]
    
  it "should return array with numbers 3,3 for number 9", ->
    expect(generate(9)).toEqual [3,3]
  