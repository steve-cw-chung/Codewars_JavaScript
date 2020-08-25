/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests. */

function score (dice){
    /* let rule = ["111","666","555","444","333","222","1","5"];
    var input = dice.sort().join('');
    var score = 0;
    for (var i = 0 ; i < 8 ; i++){
        if(input.search(rule[i])!==-1){
            if( i === 0){
            score += 1000;
            }
            input = input.substring(3);
        }

    } */
    var input = dice.sort().join('');
    var score = 0;
    
        if(input.search('111')!==-1){
            score+=1000;
            input = input.substring(3);
        } else if (input.search('666')!==-1){
            score+=600;
            input = input.replace('666','');
        } else if (input.search('555')!==-1){
            score+=500;
            input = input.replace('555','');
        } else if (input.search('444')!==-1){
            score+=400;
            input = input.replace('444','');
        } else if (input.search('333')!==-1){
            score+=300;
            input = input.replace('333','');
        } else if (input.search('222')!==-1){
            score+=200;
            input = input.replace('222','');
        }
        if(input.search('11')!==-1){
            score+=200;
            input = input.replace('11','');
        }else if (input.search('55')!==-1){
            score+=100;
            input = input.replace('55','');
        }
        if(input.search('1')!==-1){
            score+=100;
            input = input.replace('1','');
        }
        if(input.search('5')!==-1){
            score+=50;
            input = input.replace('5','');
        }
    
    return score;
}

console.log(score( [2, 4, 4, 5, 4]));

/* Solution 1 

function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}*/

/* Solution 2 
function score( dice ) {
  var six=0, five=0, four=0, three=0, too=0, one=0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) { six++; }
    if (dice[i] == 5) { five++; }
    if (dice[i] == 4) { four++; }
    if (dice[i] == 3) { three++; }
    if (dice[i] == 2) { too++; }
    if (dice[i] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3;}
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3;}
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
}
*/

/* Solution 3

function score( dice ) {
  if (dice.length !== 5) return 0;
  
  let diceStr = dice.sort().join('');
  let score = 0;
  const rules = [
    { reg: /111/, score: 1000 },
    { reg: /666/, score: 600 },
    { reg: /555/, score: 500 },
    { reg: /444/, score: 400 },
    { reg: /333/, score: 300 },
    { reg: /222/, score: 200 },
    { reg: /1/,   score: 100 },
    { reg: /5/,   score: 50 },
  ];
  
  rules.forEach(rule => {
    while (rule.reg.test(diceStr)) {
      diceStr = diceStr.replace(rule.reg, '');
      score += rule.score;
    }
  });
  
  return score;
}

*/