const tictactoe = (function() { 

    //Grabbing the cells from HTML doc
    const cells = Array.from(document.getElementsByClassName("cell"));
    //Button to reset
    const restartButton = document.getElementById('restart');
    //Show winner
    const winnerShow = document.getElementById('winner');
    //Start game
    const startButton = document.getElementById('start');

    //takes player input
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");

    const player1Display = document.getElementById("player1-display");
    const player2Display = document.getElementById("player2-display");

    const startingPlayer = document.getElementById("starting-player");


    //div element of players
    const playerInput = document.getElementById("players-show");



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
        const player1Name = player1Input.value;
        const player2Name = player2Input.value;
        //when button is clicked take the index
        const id = e.target.dataset.index;
        //if it is not the gameboard array index
        if(!gameboardArr[id]){
            gameboardArr[id] = currentPlayer;
            e.target.textContent = currentPlayer;
            
            //conditional statement for what happens when someone wins or draws
            if(playerWon(currentPlayer)){
                if(currentPlayer === "O"){
                    winnerShow.innerHTML = `${player2Name} has won!`;
                    stopClick();
                }else if(currentPlayer === "X"){
                    winnerShow.innerHTML = `${player1Name} has won!`;
                    stopClick();
                }
            }else if(gameboardArr.every(cell => cell !== '')){
                winnerShow.innerHTML = "It's a Draw !";
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }   
    }

    //compares the gameboard with the wincombinations
    const playerWon = (player) =>  {
        return winCombos.some(combo => {
            return combo.every(index => gameboardArr[index] === player)
        })
    }

    //restart button, clears everything and starts the game
    const restart = () => {
        gameboardArr = Array(9).fill('');
        currentPlayer = playerX;
        winnerShow.textContent = '';
        cells.forEach(cell => cell.textContent = '');
        startGame();
    }
 
    const showGame = (e) => {
        const divs = document.getElementsByClassName("game");
        const headerText = document.getElementsByClassName("play-header");
        for (let i = 0; i < divs.length; i++) {
            if (divs[i].style.display === "none") {
              divs[i].style.display = "block";
              startButton.style.display = "none";
            } else {
              divs[i].style.display = "none";
              startButton.style.display = "hidden";
            }
          } 

          for (let i = 0; i < headerText.length; i++) {
            headerText[i].style.display = "none";
          }
    }

    //button section
    const startGame = () => {
        cells.forEach((cell, index) => {
            cell.dataset.index = index;
            cell.addEventListener('click', cellClick);
        })
    }

    //this button stops you from clicking more if the player has won
    const stopClick = () => {
        cells.forEach((cell) => {
            cell.removeEventListener('click' , cellClick);
        })
    }

    
    
    const hideDivs = function() {
        const divs = document.getElementsByClassName("game") ;
        for (let i = 0; i < divs.length; i++) {
          divs[i].style.display = "none";
        }
      };
      
        restartButton.addEventListener('click', restart);
        startButton.addEventListener('click', function(){
            const player1Name = player1Input.value;
            const player2Name = player2Input.value;

            if (player1Name && player2Name) {
                showGame();
                startGame();

            playerInput.style.display = "none";
            // Display player names in the game section
            startingPlayer.innerHTML = `The starting player is ${player1Name} !`
            player1Display.innerHTML = `Player 1 : ${player1Name} `;
            player2Display.innerHTML = `Player 2: ${player2Name}`;
            } else {
            alert("Please enter both player names to start the game.");
            }
        });

        hideDivs();
})();

