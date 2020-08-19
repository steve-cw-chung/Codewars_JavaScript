/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */


function isPangram(string){
    //dictionary or map to indicate every letter with the occurance
    //find the occurance with 0 if not, return true else false
    var dict = [];
    var s = string.toLowerCase();
    
    for(var i =0; i < s.length; i++){
        dict.push(s.charCodeAt(i));
        //console.log(s.charCodeAt(i));
    }
    for(var i =0;i<26;i++){
        if(!dict.find(element => element ==i+97)){
            return false;
        }
    }
    return true;

    
  }

  console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));

  /* Solution 1 
  
  function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
*/
/* Solution 2
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
  */

  /* Solution 3

  function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
*/