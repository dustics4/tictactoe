//We are going to store the gameboard inside of an array
//The gameboard array has to be stored inside of a board Object
//We will want players to be stored in objects too
// Object create for Player1,player2 , symbol
//Need to create startGame Object

const tictactoe = (function() { 

    //Working with DOM elements
    // We need to add the cells and do something with them
    // Create a restart button
    // Make sure that the current player shows

    //Grabbing the cells from HTML doc
    const cells = document.getElementsByClassName("cell");
    //Button to reset
    const restartButton = document.getElementById('restart');
    //Show winner
    const winnerShow = document.getElementById('winner');

    //create an array to hold the gameboard
    let gameboard = ['', '', '', '', '', '', '', '', ''];
    //starting with player X
    let currentPlayer = "X";
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

    //function to display the board
    //We need to change the function to display show the board with the cells now.
    function displayBoard() {
        //foreveryrow
        for(let i = 0; i < 3; i++){
            //foreverycolumn
            for(let j = 0 ; j < 3; j++){
                row += gameboard[i][j] + "";
            }
            console.log(row);
        }
    }
    

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

    function cellClick(e) {
        //when clicking the button we would like to make sure the empty cell is placed with a X or O
        //To do this the function has to pass a event
        // the event is passed to the cell index - so create a cell index variable
        // then check if the gameboard index == '' and  is not winnner.textcontent
        // we then make sure that the gameboard cell index is  = current player
        //then event targe text content == player to show it on the cell index
        //then we can run a if statement to check wins   
    }

    //need to create a check win function

    //button section
    cells.forEach(cell => cell.addEventListener('click', cellClick))

    //
})();

