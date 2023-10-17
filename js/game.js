import { showGameHistory, showPreviousMove, showNextMove } from './history.js';
import { setTitle, mediaQuery } from './script.js'
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

    mediaQuery("flex","none")

    infoContainer.innerHTML = "";
    rightPanel.classList.add('playerWon')

    const text = gameState.player === "tie" ? "It's a TIE!" : "Player " + gameState.player + " Wins!";
    setTitle(text);

    const buttonDiv = document.createElement('div')

    const showHistory = document.createElement('span')
    showHistory.innerHTML = `<i class="fa-solid fa-rectangle-list fa-xl"></i>`
    showHistory.classList.add('icon')
    
    const prevButton = document.createElement('div')
    prevButton.innerHTML = `<i class="fa-solid fa-backward fa-xl"></i>`
    prevButton.classList.add('icon')
    prevButton.id = "prev-btn"

    const nextButton = document.createElement('div')
    nextButton.innerHTML = `<i class="fa-solid fa-forward fa-xl"></i>`
    nextButton.classList.add('icon')
    nextButton.id = "next-btn"

    const restart = document.createElement('button')
    restart.textContent = "Restart Game"

    buttonDiv.append(showHistory, prevButton, nextButton)
    infoContainer.append(buttonDiv, restart)

    showHistory.addEventListener('click', () => {
        mediaQuery("flex","none");
        setTitle("Game History")
    })
    prevButton.addEventListener('click', showPreviousMove)
    nextButton.addEventListener('click', showNextMove)
    restart.addEventListener('click', startGame)

    //Replace all boxes with a deep clone of itself and remove the event listener 
    const allBoxes = document.querySelectorAll('.box')
    allBoxes.forEach(box => box.replaceWith(box.cloneNode(true))) 

    showGameHistory()
}

