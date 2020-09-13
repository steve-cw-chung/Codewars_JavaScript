

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    //console.log(s)
    var sorted = s//.split('').sort().join('')
    var currentCharacter
    let vowels = []
    let consonants = []
    for(var i = 0 ; i < s.length;i++){
        currentCharacter = sorted.charAt(i)
        /* switch(currentCharacter){
            case 'a': case 'e': case 'i': case 'o': case 'u': vowels.push(currentCharacter)

        } */
        if(currentCharacter==='a'||currentCharacter==='e'||currentCharacter==='i'||currentCharacter==='o'||currentCharacter==='u')
            vowels.push(currentCharacter)
        else
            consonants.push(currentCharacter)
    }
    console.log(vowels.concat(consonants))
}


function main() {
    const s = "javascriptloops";
    
    vowelsAndConsonants(s)
}
main()