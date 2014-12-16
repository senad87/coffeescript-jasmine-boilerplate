describe("FizzBuzz", function () {

  beforeEach(function () {
    this.fizzBuzz = new FizzBuzz();
  });

  it("should replace all divisable by 3 with word 'Fizz', divisable by 5 with 'Buzz' and if number devisible by both should be replaced with 'FizzBuzz'", function () {
    expect(this.fizzBuzz.print().slice(0, 57)).toEqual("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz");
  });

});