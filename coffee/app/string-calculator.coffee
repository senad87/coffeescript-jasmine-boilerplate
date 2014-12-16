class window.StringCalculator
  
  delimiter: ","
  
  constructor: (@nums)->

  add: ->
    if @nums isnt ""
      @handleDelimiter()
      return @sumUp()
    else
      return 0

  handleDelimiter: ->
    if @isFirstCharDelimiter()
      @setDelimiter()
      @removeDelimiterFromBeginning()
      
    @replaceNewLineDelimiters()
    
  isFirstCharDelimiter: ->
    @isFirstCharNonNumeric() && @isSecondCharNewLineChar()
    
  isFirstCharNonNumeric: ->
    isNaN @nums[0]
  
  isSecondCharNewLineChar: ->
    @nums[1] is "\n"
    
  setDelimiter: ->
    @delimiter = @nums[0]
    
  removeDelimiterFromBeginning: ->
    @nums = @nums.slice 2, @nums.length
  
  replaceNewLineDelimiters: ->
    @nums = @nums.replace /\n/g, @delimiter
  
  sumUp: ->
    result = 0
    negativeNums = []
    numsArray = @nums.split @delimiter
    
    for num in numsArray
      numFloat = parseFloat(num)
      result += numFloat
      @push(numFloat).inThe(negativeNums)
#      @createNegativeNumsArray(negativeNums, numFloat)
    
    if negativeNums.length > 0
      throw new Error "Negative Numbers #{negativeNums.join()} are not allowed"
      
    return result
  
  createNegativeNumsArray: (negativeNums, num)->
    if (num < 0)
      negativeNums.push(num)
      
  push:(num)-> inThe:(negativeNums)-> if num < 0
    negativeNums.push(num)
    
  does: (number)-> existsIn:(array)->
    array.indexOf != -1
    
  is:(num)-> oddNumber:->
    !!(num % 2)
    
    
window.map = (f) ->
    (list) ->
        return [f, list]

  