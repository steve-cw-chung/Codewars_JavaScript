/* In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter. */


function permutations(str) {
    return (str.length <= 1) ? [str] :
            Array.from(new Set(
              str.split('')
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
   }


console.log(permutations('abcdefg'));

/* Solution 2
function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}
*/

/* Solution 3
const unique = xs => [ ...new Set(xs) ]
const concat = (a, b) => [ ...a, ...b ] 
const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

const permute = (x, i, xs) => 
  combinations(drop(i)(xs)).map(y => x + y)

const combinations = s =>
  s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

const permutations = s => unique(combinations(s))
*/