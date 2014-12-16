describe("TeaParty", function () {

  it("should return proper greeting for Jane Austin", function () {
    expect(wellcome("Jane Austin")).toBe("Hello Ms. Austin");
  });

  it("should return proper greeting for George Orwell", function () {
    expect(wellcome("George Orwell", "male")).toBe("Hello Mr. Orwell");
  });

  it("should return proper greeting for George Orwell", function () {
    expect(wellcome("Isaac Newton", "male", true)).toBe("Hello Sir Newton");
  });

});