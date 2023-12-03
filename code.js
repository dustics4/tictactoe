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

    function cellClick(e) {
        //when button is clicked take the index
        let index = e.target.id;
        //if it is not the gameboard array index
        if(!gameboardArr[index]){
            gameboardArr[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            
            if(playerWon(currentPlayer)){
                winnerShow.innerHTML = `${currentPlayer} has won!`;
            }else if(gameboardArr.every(cell => cell !== '')){
                winnerShow.innerHTML = "It's a Draw !";
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
            console.log("Check");

        }   
    }

    //compares the gameboard with the wincombinations
    const playerWon = (player) =>  {
        return winCombos.some(combo => {
            return combo.every(index => gameboardArr[index] === player)
        })
    }


    //button section
    const startGame = () => {
        cells.forEach(cell => cell.addEventListener('click',cellClick));
    }

    startGame();
    
})();

