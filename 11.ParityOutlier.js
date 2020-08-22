/* You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number) */


function findOutlier(integers){
    var retVal = 0;
    var even = 0;
    var odd = 0;
    var firstOdd = 0;
    var firstEven = 0;
    for(var i = 0; i < integers.length;i++){
        if(i === 0){
            if(integers[i]%2===0||integers[i]===0){
                even++;
                firstEven = integers[i];
            }else {
                odd++;
                firstOdd = integers[i];
            }
        } else {
            if(even>1 && odd===1){
                if(integers[i]%2!==0){
                    retVal=firstOdd;
                }
            } else if (odd >1&&even===1){
                if(integers[i]%2===0||integers[i]===0)
                    retVal = firstEven;
            } else {
                if(integers[i]%2!==0){
                    odd++;
                    firstOdd= integers[i];
                } else if (integers[i]%2===0){
                    even++;
                    firstEven = integers[i];
                }
            }
            
        }
    }
    if(even===1){
        retVal = firstEven;
    } else if (odd ===1){
        retVal = firstOdd;
    }
    return retVal;
  }

  console.log(findOutlier([-35404610,-176043673,113071389,111252455]));

  /* Solution 1
  function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
  */

  /* Solution 2 
  function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

  */

  /* Solution 3 
  function findOutlier(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

  */