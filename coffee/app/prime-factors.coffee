window.generate = (n)->

  primes = []
  candidate = 2

  while n > 1
    while n % candidate is 0
      primes.push candidate
      n /= candidate
    candidate++

  primes