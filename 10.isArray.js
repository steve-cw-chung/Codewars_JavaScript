/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs. */

function inArray(array1,array2){
    var retVal = [];
    var duplicate = false;
    for(var i = 0; i < array2.length;i++){
        for(var j = 0; j < array1.length; j++){
            if(array2[i].includes(array1[j])){
                for(var str in retVal){
                    console.log("str: " + retVal[str]);
                    if (retVal[str] === array1[j]){
                        duplicate = true;
                    }
                }
                if(duplicate === false ){
                    retVal.push(array1[j]);
                }
                duplicate = false;
            }
        }
    }
    return retVal.sort();
}
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]

console.log(inArray(a1,a2));


/* Solution 1 

function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}*/


/* Solution 2 
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
*/

/* Solution 3 

function inArray(a1, a2) {
  var str = a2.join(' ');
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}
*/

