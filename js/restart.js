import { gameState, choosePlayerContainer, 
    confirmPlayer, gameContainer, gameBoard, 
    title, start, infoContainer, gameHistory, rightPanel } from "./variables.js";
import { setTitle } from "./script.js";

export function startGame(){
    gameState.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    gameState.player = "";
    gameState.gameOver = false;

    gameState.playerXCombos = [];
    gameState.playerOCombos = [];
    gameState.history = [];
    gameState.winner = false;
    gameState.historyPointer = -1;
    gameState.prevHistory = 0;

    choosePlayerContainer.style.display = "flex"
    confirmPlayer.style.display = "none"
    gameBoard.style.display = "none"

    gameBoard.innerHTML = ""
    infoContainer.innerHTML = ""
    gameHistory.innerHTML = ""

    choosePlayerContainer.style.display = "flex"
    start.style.display = "none"
    title.style.display = "none"
    gameContainer.classList.remove('loaded')
    rightPanel.classList.remove('playerWon')

    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.classList.remove('cross')
        box.classList.remove('circle')
        box.classList.remove('clicked')
    })

    setTitle("Let's Play Tic Tac Toe!");
}