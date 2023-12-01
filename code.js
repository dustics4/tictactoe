const tictactoe = (function() { 

    //Grabbing the cells from HTML doc
    const cells = Array.from(document.getElementsByClassName("cell"));
    //Button to reset
    const restartButton = document.getElementById('restart');
    //Show winner
    const winnerShow = document.getElementById('winner');

    //starting with player X
    let playerX = "X";
    let playerO = "O";
    let currentPlayer = playerX;
    
    //creating a empty array
    gameboardArr = Array(9).fill('');

    //Win combinations. Each inner array represents the winning combination of cell indeces
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    function makeMove(row, col) {

        //start with making sure the game is started
        // "!gameover" and gameboard row , col are equal to  "-" , has to be equal to player
        if(!gameOver && gameboard[row][col] === "-" ){
            //now me make sure game board is filled with the current player
            gameboard[row][col] = currentPlayer;
            //Once the move has been made we display the move on the board
            displayBoard();
            if(winCon()) {
                console.log("Player : " + currentPlayer + "Has Won!")
                gameOver = true;
            }else if (!gameboard.flat().includes("-")){
                console.log ("It's a tie!");
                gameOver = true;
            }else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                console.log("Next player : " + currentPlayer);
            }
        }
            
    }

    const playerWon = () =>  {
        //checking for each codition in in Combos
        for(let condition of winCombos){

            //setting condition variable to look for each first 3 numbers of row in array of win Combos
            let [a , b , c] = condition;

            // if the gameboard array is equal to any of the win combos shown, we return the win combo
            if(gameboardArr[a] && (gameboardArr[a] == gameboardArr[b] == gameboardArr[c])){
                return [a , b , c]
            }
        }   
        return false;
    }

    function cellClick(e) {
        //when button is clicked take the index
        let index = e.target.index;

        //if it is not the gameboard array index
        if(!gameboardArr[index]){
            //gameboard index is equal to current player
            gameboardArr[index] = currentPlayer;
            //we make the current player appear
            e.target.innerText = currentPlayer;
            console.log(currentPlayer);


        }else {
            currentPlayer = currentPlayer == playerX ? playerO : playerX;
            e.target.innerText = currentPlayer;
        }


    }

    //button section
    const startGame = () => {
        cells.forEach(cell => cell.addEventListener('click',cellClick));
    }

    startGame();
    
})();

