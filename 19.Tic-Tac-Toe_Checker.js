/* If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe. */

function isSolved(board){
    /*  8 ways to win 
    */
    var zeroes = 0;
    if(board[2][2]===0){
       zeroes++;
   }
   
   for ( var i = 0 ; i < 3 ; i++ ){
       for (var j = 0 ; j < 3 ; j++){
            if(i===0 && j === 0){
                /* check 1 */
                if(board[i][j]!==0){
                    if(board[i][j+1]===board[i][j]){
                        if(board[i][j+2]===board[i][j]){
                            return board[i][j];
                        }
                    }
                    /*check 2*/
                    if(board[i+1][j+1]===board[i][j]){
                        if(board[i+2][j+2]===board[i][j]){
                            return board[i][j];
                        }
                    }
                    /* check 3 */
                    if(board[i+1][j]===board[i][j]){
                        if(board[i+2][j]===board[i][j]){
                            return board[i][j];
                        }
                    }
                } else {
                    zeroes++;
                }
                
            } else if (i === 0 && j === 1){
                /* check 4 */
                if(board[i][j]!==0){
                    if(board[i][j]===board[i+1][j]){
                        if(board[i][j]===board[i+2][j]){
                            return board[i][j];
                        }
                    }
                } else {
                    zeroes++;
                }
            } else if (i === 0 && j === 2 ){
                /*check 5 */
                if(board[i][j]!==0){
                    if(board[i][j]===board[i+1][j]){
                        if(board[i][j]===board[i+2][j]){
                            return board[i][j];
                        }
                    }
                }else {
                    zeores++;
                }
            } else if (i === 1 && j=== 0 ){
                /* check 6*/
                if(board[i][j]!==0){
                    if(board[i][j]===board[i][j+1]){
                        if(board[i][j]===board[i][j+2]){
                            return board[i][j];
                        }
                    }
                } else {
                    zeroes++;
                }
                j++;
                j++;
            } else if (i === 2 && j === 0 ){
                if(board[i][j]!==0){
                    /* check 7 */
                    if(board[i][j]===board[i][j+1]){
                        if(board[i][j]===board[i][j+2]){
                            return board[i][j];
                        }
                    }
                    /* check 8 */
                    if(board[i][j]===board[i-1][j+1]){
                        if(board[i][j]===board[i-2][j+2]){
                            return board[i][j];
                        }
                    }
                } else {
                    zeroes++;
                }
            }
            
       }
   }
   if(zeroes!==0){
       return -1;
   } else {
       return 0;
   }
}

console.log(isSolved([[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]));

/* Solution 1 
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}
*/

/* Solution 2 
function isSolved(board) {
  
  function checkHor() {
  var res;
    board.forEach(function(item){
      if (item[0] == item[1] &&
          item[0] == item[2] &&
          item[1] == item[2] &&
          item[0] != 0)
      res = item[0];
    });
    return res;
  }
  
  function checkVer() {
    for (var a = 0; a< 3; a++)
    {
    if (board[0][a]==board[1][a]&&
        board[1][a]==board[2][a]&&
        board[2][a]==board[0][a]&&
        board[0][a]!=0)
        return board[0][a];
    }
  }
  
  function checkA1(){
  if ((board[0][0]==board[1][1]&&
       board[1][1]==board[2][2]&&
       board[2][2]==board[0][0])||
     ( board[0][2]==board[1][1]&&
       board[1][1]==board[2][0]&&
       board[2][0]==board[0][2]))
      return board[1][1];
  }
  
 
  function gameOver() {
  for (var x = 0; x < 3; x++)
  for (var y = 0; y < 3; y++)
    if  (board[x][y] == 0)
      return -1;
  return 0;
  }
  
  return checkHor() || checkVer() || checkA1() || gameOver();
}*/

/* Solution 3
const horizontal = (player) => (board) => 
  board.some(row => row.every(spot => spot == player))
  
const vertical = (player) => (board) => 
  board.some((row, i) => board.every(row => row[i] == player))
  
const diagonals = (player) => (board) => 
  board.every((row, i) => row[i] == player) || board.every((row, i) => row[3-1-i] == player)
  
const player = (number) => ({
  wins: (board) => [horizontal, vertical, diagonals].some(full => full(number)(board))
})

const unfinished = (board) =>
  board.some(row => row.some(spot => !spot))

const DRAW = 0


const isSolved = (board) => {switch (true) {
  case player(1).wins (board):
    return 1
    
  case player(2).wins (board):
    return 2
  
  case unfinished (board):
    return -1

  default:
    return DRAW
}}
*/

/* Solution 4 

function isSolved(board) {
  var row = board;
  var col = [0,1,2].map((i) => [0,1,2].map((h)=>board[h][i]));
  var di1 = [[0,1,2].map((i) => board[i][i])];
  var di2 = [[0,1,2].map((i) => board.reverse()[i][i])];
  var all = row.concat(col,di1,di2);
  if (all.some(x=>""+x=="1,1,1")){return 1;}
  else if (all.some(x=>""+x=="2,2,2")){return 2;}
  else if (all.some(x => x.includes(0))){return -1;}
  else{return 0;};
}*/