window.countdown = (start)->
  list = []
  
  if start isnt 0
    for num in [0..start].reverse()
      list.push num
    
  return list