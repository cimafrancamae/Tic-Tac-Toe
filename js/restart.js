import { gameState, choosePlayerContainer, 
    confirmPlayer, gameContainer, gameBoard, 
    title, start, infoContainer, gameHistory, rightPanel, closeHistory } from "./variables.js";
import { setTitle, mediaQuery } from "./script.js";

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
    start.style.display = "none"
    title.style.display = "none"
    closeHistory.style.display = "none"

    gameBoard.innerHTML = ""
    infoContainer.innerHTML = ""
    gameHistory.innerHTML = ""


    gameContainer.classList.remove('loaded')
    rightPanel.classList.remove('playerWon')
    gameContainer.classList.add('unloaded')
    gameContainer.classList.remove('loaded')

    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.classList.remove('cross')
        box.classList.remove('circle')
        box.classList.remove('clicked')
    })

    setTitle("Let's Play Tic Tac Toe!");
    mediaQuery("flex", "none")
}