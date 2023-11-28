//We are going to store the gameboard inside of an array
//The gameboard array has to be stored inside of a board Object
//We will want players to be stored in objects too
// Object create for Player1,player2 , symbol
//Need to create startGame Object

(function() {
    
    //create an array to hold the gameboard
    const gameboard = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
    ]
    //starting with player X
    //Making sure that gameOver is set to false, can use it as Bool in if statements later on
    let currentPlayer = "X";
    let gameOver = false;

    //function to display the board
    function displayBoard() {
        //foreveryrow
        for(let i = 0; i < 3; i++){
            //make sure that row is empty
            let row = "";
            //foreverycolumn
            for(let j = 0 ; j < 3; j++){
                row += gameboard[i][j] + "";
            }
            console.log(row);
        }
    }
    
    //function to check win conditions

    function winCon(){
        //check rows
        for(let i = 0; i < 3; i++){
            if(gameboard[i][0] === currentPlayer && gameboard[i][1] === currentPlayer && gameboard[i][2] === currentPlayer){
                return true;
            }
        }

        //check columns
        for(let j = 0; j < 3; i++){
            if(gameboard[j][0] === currentPlayer && gameboard[j][1] === currentPlayer && gameboard[j][2] === currentPlayer){
                return true;
            }
        }

        //check diagonal 
        if(
            (gameboard[0][0] === currentPlayer && gameboard[1][1] == currentPlayer && gameboard[2][2] == currentPlayer) ||
            (gameboard[0][2] === currentPlayer && gameboard[1][1] == currentPlayer && gameboard[2][0] == currentPlayer)
        ) {
            return true
        }

    }

    //Now need to write a function to play the game
    //We need to display the board first
    // Once the board is displayed we get the player to choose their index
    //function will take rows/colums

    function makeMove(row, col) {

        //start with making sure the game is started
        // "!gameover" and gameboard row , col are equal to  "-" , has to be equal to player

        if(!gameOver && gameboard[row][col] === "-" ){
            //now me make sure game board is filled with the current player
            gameboard[row][col] = currentPlayer;
            //Once the move has been made we display the move on the board
            displayBoard();
            
        }
            
    }




    

})();