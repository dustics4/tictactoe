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
    const isPlayer_X_Turn = false;

    
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

    const playerWon = (player) =>  {
        return winCombos.some(combo => {
            return combo.every(index => gameboardArr[index] === player)
        })
    }

    function cellClick(e) {
        //when button is clicked take the index
        let cell = e.target;
        const currentClass = isPlayer_X_Turn ? playerX : playerO;
        placeMark(cell, currentClass);
        //if it is not the gameboard array index
       
           
            if(playerWon(currentPlayer)){
                winnerShow.innerHTML = `${currentPlayer} has won!`;
            }else if(gameboardArr.every(cell => cell !== '')){
                winnerShow.innerHTML = "It's a Draw !";
            }else {
            }
            
        

    }

    const placeMark = (cell, currentClass) => {
        cell.classList.add(currentClass)
    }   

    const swapTurns = () => {
        isPlayer_X_Turn = !isPlayer_X_Turn;
    }

    //button section
    const startGame = () => {
        const isPlayer_X_Turn = false;
        cells.forEach(cell => cell.addEventListener('click',cellClick));
    }

    startGame();
    
})();

