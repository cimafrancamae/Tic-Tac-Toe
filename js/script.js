import { recordMove, checkWinner, displayWinner } from './game.js'
import { gameState } from './variables.js'

const choosePlayerContainer = document.querySelector('.choose-player-container');
const confirmPlayer = document.querySelector('.confirm-player');
const mainContainer = document.querySelector('.main-container');
const infoContainer = document.querySelector('.info-container');
const playerX = document.getElementById('player-x');
const playerO = document.getElementById('player-o');

function setPlayerX(){
    gameState.player = "X"
    confirmPlayer.innerHTML = ""
    confirmFirstPlayer()
}

function setPlayerO(){
    gameState.player = "O"
    confirmPlayer.innerHTML = ""
    confirmFirstPlayer()
}

//Select First Player
function confirmFirstPlayer() {
    const span = document.createElement('span');
    const button = document.createElement('button');
    let playerText = ""

    playerText = gameState.player === "X" ? "Player X plays first?" : "Player O plays first?";

    span.textContent = playerText;
    button.textContent = "Yes"
    confirmPlayer.append(span)
    confirmPlayer.append(button)
    confirmPlayer.style.display = "flex"

    button.addEventListener('click', () => {
        choosePlayerContainer.style.display = "none";
        loadBoard();
    })
}

//Display the Game Board
function loadBoard() {

    gameState.board.forEach((row,index) => {
        row.forEach((_sq, i) => {

            // Create the Tic Tac Toe squares
            const square = document.createElement('div');
            const squareId = `box-${index}${i}`;
            square.classList.add('box');
            square.id = squareId
            mainContainer.append(square);

            //Listen if a box is clicked
            square.addEventListener('click', () => {

                gameState.player === "X" ? square.classList.toggle('cross') : square.classList.toggle('circle');

                recordMove(index, i);
                checkWinner();

                if(gameState.gameOver){
                    displayWinner();
                    return
                } else {
                    const emptyBox = checkAvailableSquare()

                    if(!emptyBox){
                        gameState.player = "tie";
                        displayWinner();
                        return
                    }
                }
                
                square.classList.add('clicked');

                gameState.player = gameState.player === "X" ? "O" : "X";

            })

            
        })
    })

    mainContainer.style.display = "flex";
}

function checkAvailableSquare(){
    let emptyBox = []

    //Check if board has available squares
    gameState.board.forEach((row, i) => {
        emptyBox[i] = row.includes('')
    })

    return emptyBox.includes(true) ? true : false;
}

export function restartGame(){
    gameState.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    gameState.player = "";
    gameState.gameOver = false;

    gameState.playerXCombos = [];
    gameState.playerOCombos = [];
    gameState.winner = false;

    choosePlayerContainer.style.display = "flex"
    confirmPlayer.style.display = "none"
    mainContainer.style.display = "none"

    mainContainer.innerHTML = ""
    infoContainer.innerHTML = ""
}

playerX.addEventListener('click', setPlayerX);
playerO.addEventListener('click', setPlayerO);





