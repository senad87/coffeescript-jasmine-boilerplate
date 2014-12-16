class window.FizzBuzz
  
  results: new Array()
  currentNum: null

  print: ->
    @collectAnswer(num) for num in [1..100]
    @results.join ","
    
  collectAnswer: (num)->
    @currentNum = num
    @results.push @getAnswer()
  
  getAnswer: ->
    if @isDivisibleByThreeAndFive() then return "FizzBuzz"
    if @isDivisibleBy 3 then return "Fizz"
    if @isDivisibleBy 5 then return "Buzz"
    @currentNum
  
  isDivisibleByThreeAndFive: ->
    @isDivisibleBy(3) and @isDivisibleBy(5)
    
  isDivisibleBy: (divisor)->
    @currentNum % divisor is 0
    
  isThe: (product)-> Defined: -> 
    product != undefined
