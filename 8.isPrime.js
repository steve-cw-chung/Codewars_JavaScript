/* Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  /* false */
/*is_prime(2)  /* true  */
/*is_prime(-1) /* false */ 


function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  /* Solution 1 

  function isPrime(n) {
  if (n <= 1)
    return false;
  if (n <= 3 || n == 5 || n == 7 || n == 11)
    return true;
  if (n % 2 === 0 || n % 3 === 0)
    return false;
  for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
    if (n % i === 0 || n % (i + 2) === 0)
      return false;
  return true;
}
*/
/* Solution 2 */
/** Miller-Rabin Primality Test in O(k log^3 n) **/

/* It's a probablistic test, but should work on (nearly) all Javascript integers */
/*
function modulusProduct(a, b, n) {
    if (b == 0)
      return 0;
    if (b == 1)
      return a % n;
    return (modulusProduct(a, (b - b % 10)/10, n) * 10 + (b % 10) * a) % n;
  }
  
  function modulusPower(a, b, n) {
    if (b == 0)
      return 1;
    if (b == 1)
      return a % n;
    if (b % 2 == 0) {
      var c = modulusPower(a, b/2, n);
      return modulusProduct(c, c, n);
    }
    return modulusProduct(a, modulusPower(a, b - 1, n), n);
  }
  
  function isPrime(n) {
    /* LuT for items under 25 and items that would be killed fast via Eratosthenes method */
    /*
    if (n <= 1)
      return false;
    if (n == 2 || n == 3  || n == 5  || n == 7 || n == 11 || n == 13
               || n == 17 || n == 19 || n == 23)
      return true;
    if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0)
      return false;
    
    /* Create Witness Array */
    /*
    for (var a = [2, 3, 5, 7, 11, 13, 17, 19], b = n - 1, d, t, i, x;
          b % 2 == 0; b = b / 2);
    /* Transform n - 1 => 2^x * d with some odd d by factoring powers of 2 from n - 1 */
    /*for (i = 0; i < a.length; i++) {
      x = modulusPower(a[i], b, n);
      if (x == 1 || x == n - 1)
        continue;
      for (t = true, d = b; t && d < n - 1; d = d * 2) {
        x = modulusProduct(x, x, n);
        if (x == n - 1)
          t = false;
      }
      if (t)
        return false; /* composite (non-prime) */
    /* }
    return true; /* probably prime */
  /*}*/
