/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"  */

function DNAStrand(dna){
    var i = 0;
    let list = dna.split("");
    var retVal= "";
    for(var i = 0; i < list.length; i ++ ){
        if(dna[i]=="A") retVal+="T"; 
        else if (dna[i]=="T") retVal += "A";
        else if (dna[i]=="G") retVal += "C";
        else if (dna[i]=="C") retVal += "G";
    }
    return retVal;
    
}

console.log(DNAStrand("ATGC"));

/* Solution 1 
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
*/

/* Solution 2 
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
*/

/* Solution 3 

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);*/