/* Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas" */

function solution(input, markers) {

    var output = "";

    let inputs = input.split("\n");
    inputs.forEach( (line,index) => markers.forEach( marker => 
        line.indexOf(marker)>-1?line = inputs[index] = line.slice(0, line.indexOf(marker)): 0//console.log(marker + " does not exist")
        ));
  
    inputs.forEach((line,index ) => line.charAt((line.length)-1)===' '?inputs[index]=line.slice(0,(line.length)-1):0);
    inputs.forEach((line,index) => index<inputs.length-1?output+=(inputs[index]=line.concat("\n")):output+=line);
    
    return output;
};
var input = "apples, pears # and bananas\ngrapes\nbananas !apples";
let markers = ["#", "!"];
console.log(solution(input,markers));

/* Solution 1 

function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}
*/

/* Solution 2
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}
*/

/* Solution 3 
function solution(input, markers){
  return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
}
*/