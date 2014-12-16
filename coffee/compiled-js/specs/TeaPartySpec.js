(function() {

  describe("TeaParty", function() {
    it("should return proper greeting for Jane Austen", function() {
      return expect(wellcome("Jane Austen")).toBe("Hello Ms. Austen");
    });
    it("should return proper greeting for George Orwell", function() {
      return expect(wellcome("George Orwell", "male")).toBe("Hello Mr. Orwell");
    });
    return it("should return proper greeting for Isaac Newton", function() {
      return expect(wellcome("Isaac Newton", "male", true)).toBe("Hello Sir Newton");
    });
  });

}).call(this);
