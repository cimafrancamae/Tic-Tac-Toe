import { showGameHistory, showPreviousMove, showNextMove } from './history.js';
import { setTitle } from './script.js'
import { gameState, winningCombos, infoContainer, rightPanel } from './variables.js'
import { startGame } from './restart.js';

export function recordMove(index1, index2){

    infoContainer.innerHTML = "";

    //Update Board State
    gameState.board[index1][index2] = gameState.player;

    //Concatenate indices
    const index = index1.toString() + index2.toString();

    //Store indices to player's array
    gameState.player === "X" ? gameState.playerXCombos.push(index) : gameState.playerOCombos.push(index);

    const nextPlayer = gameState.player === "X" ? "O" : "X";
    const text = "It's Player " + nextPlayer + "'s Turn";

    setTitle(text);

    gameState.historyPointer++;
    console.log('pointer', gameState.historyPointer)

}

export function checkWinner(){

    let playerMoves = gameState.player === "X" ? gameState.playerXCombos : gameState.playerOCombos;

    if(playerMoves.length >= 3){

        //Lookup the winning combos
        winningCombos.forEach((combo) => {

            //Check if player's moves has a winning combination
            const comboExist = combo.every(item => playerMoves.includes(item))
            if(comboExist){
                gameState.gameOver = true
            }
        })

        return gameState.gameOver

    } else {

        return false

    }
}

export function displayWinner(){
    infoContainer.innerHTML = "";
    rightPanel.classList.add('playerWon')

    const text = gameState.player === "tie" ? "It's a TIE!" : "Player " + gameState.player + " Wins!";
    setTitle(text);

    const buttonDiv = document.createElement('div')
    
    const prevButton = document.createElement('button')
    prevButton.textContent = "<< Prev"
    prevButton.id = "prev-btn"

    const nextButton = document.createElement('button')
    nextButton.textContent = "Next >>"
    nextButton.id = "next-btn"

    const restart = document.createElement('button')
    restart.textContent = "Restart Game"

    buttonDiv.append(prevButton, nextButton)
    infoContainer.append(buttonDiv, restart)


    prevButton.addEventListener('click', showPreviousMove)
    nextButton.addEventListener('click', showNextMove)
    restart.addEventListener('click', startGame)

    //Replace all boxes with a deep clone of itself and remove the event listener 
    const allBoxes = document.querySelectorAll('.box')
    allBoxes.forEach(box => box.replaceWith(box.cloneNode(true))) 

    showGameHistory()
}

