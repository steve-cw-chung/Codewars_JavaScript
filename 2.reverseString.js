var string = 'This is fine';
console.log(string);
// Option 1
console.log(string.split(''));

// Option 2
console.log([...string]);

// Option 3
console.log(Array.from(string));

// Option 4
console.log(Object.assign([], string));

// Result:
// ['w', 'o', 'r', 'd']
console.log(string.split(' '));
var temp;
var retVal = "";

for(var i =string.length-1; i >=0; i--){
    /* temp = string[i];
    console.log(temp);
    string[i] = string[string.length-1-i];
    string[string.length-1-i] = temp;
    console.log(string); */
    retVal+= string[i];
}
console.log(retVal);


var list = string.split(' ');
var retVal = "";
for(var i = 0 ; i < list.length; i++){
    retVal = list[i] + " " + retVal;
}

console.log(retVal);