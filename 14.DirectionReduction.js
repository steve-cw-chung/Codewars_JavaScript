/* Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountain desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or

{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or

[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or

{ "WEST" }
or

[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating. */
/* Solution for Full reduction 
function dirReduc(arr){
    var x =0 , y =0;
    let retVal = [];
    for (var i = 0 ; i < arr.length ; i ++){
        if(arr[i]==="NORTH"){
            y++;
        } else if ( arr[i]==="SOUTH"){
            y--;
        } else if (arr[i]==="WEST"){
            x--;
        } else if (arr[i]==="EAST"){
            x++;
        }
    }
    if( x < 0){
        for(var i = 0 ; i < Math.abs(x);i++){
            retVal.push("WEST");
        }
    } else if (x >0){
        for(var i =0; i < x; i++){
            retVal.push("EAST");
        }
    }
    if( y < 0){
        for(var i = 0; i< Math.abs(y);i++){
            retVal.push("SOUTH");
        }
    } else if (y > 0) {
        for(var i =0; i> y;i++){
            retVal.push("NORTH");
        }
    }
    return retVal;
}
*/


function dirReduc(arr){
    var length = arr.length;
    for(var i = 1; i <length;i++){
        if(arr[i]==="NORTH" && arr[i-1]==="SOUTH"){
            arr.splice(i-1,2);
            length-=2;
            i-=2;
        } else if(arr[i]==="SOUTH" && arr[i-1]==="NORTH"){
            arr.splice(i-1,2);
            length-=2;
            i-=2;
        } else if(arr[i]==="EAST" && arr[i-1]==="WEST"){
            arr.splice(i-1,2);
            length-=2;
            i-=2;
        } else if(arr[i]==="WEST" && arr[i-1]==="EAST"){
            arr.splice(i-1,2);
            length-=2;
            i-=2;
        }
        if( i === -1){
            i++;
        }
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

/* Solution 1 

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}*/

/* Solution 2 
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}
*/

/* Solution 3 
function dirReduc(arr){
  var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}
*/