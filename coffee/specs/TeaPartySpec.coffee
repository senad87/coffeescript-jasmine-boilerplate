describe "TeaParty", ->

  it "should return proper greeting for Jane Austen", ->
    expect(wellcome("Jane Austen")).toBe "Hello Ms. Austen"
    
  it "should return proper greeting for George Orwell", ->
    expect(wellcome("George Orwell", "male")).toBe "Hello Mr. Orwell"
  
  it "should return proper greeting for Isaac Newton", ->
    expect(wellcome("Isaac Newton", "male", true)).toBe "Hello Sir Newton"