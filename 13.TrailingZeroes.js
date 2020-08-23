/* Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros. */

/* function zeros (n) {
    var total = 1;
    var retVal = 0;    
    for(var i =1; i <= n;i++ ){
        total*=i;
    }
    console.log(total); 
    var s = total.toLocaleString('fullwide', { useGrouping: false }).split("");
    console.log(s);
    for(var i =0; i < s.length;i++){
        if(s.pop()==='0'){
            retVal++;
        } else{
            return retVal;
        }
    }
} */

/* Solution 1*/

function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}


/* Solution 2 
function zeros(n) {
  return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
}
*/

/* Solution 3
function zeros (n) {
  var res = 0;
  for(var i=5; i<n; i*=5)
    res += Math.floor(n/i);
  return res;
}
*/

console.log(zeros(30));