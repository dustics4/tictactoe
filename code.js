const tictactoe = (function() { 

    //Working with DOM elements
    // We need to add the cells and do something with them
    // Create a restart button
    // Make sure that the current player shows

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
        //
        

    }

    //need to create a check win function

    //button section
    const startGame = () => {
        cells.forEach(cell => cell.addEventListener('click',cellClick));
    }

    startGame();
    
})();

