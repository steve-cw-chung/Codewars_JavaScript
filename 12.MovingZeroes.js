/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

function moveZeros(arr){
    var length = arr.length;
    for(var i = 0; i < length;i++){
        if(arr[i]===0){
            arr.splice(i,1);
            arr.push(0);
            i--;
            length--;
        }
    }   
    return arr;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

/* Solution 1 

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

*/

/* Solution 2 

var moveZeros = function (arr) {
  let outputArray = []; 
  let zeroArray = [];
  
  arr.forEach(value => value === 0 ? zeroArray.push(value) : outputArray.push(value));
  
  return outputArray.concat(zeroArray);
}
}*/

/* Solution 3

var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
*/