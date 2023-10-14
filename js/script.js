import { recordMove, checkWinner, displayWinner } from './game.js'
import { gameState, choosePlayerContainer, confirmPlayer, gameContainer, gameBoard, playerO, playerX, title, start } from './variables.js'
import { startGame } from './restart.js';


export function setTitle(text){
    title.innerHTML = "";
    const h1 = document.createElement('h1')
    h1.textContent = text;
    title.append(h1)

    const button = document.createElement('button')
    button.textContent = "Start Game"
    start.append(button)
}

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
        gameState.firstPlayer = gameState.player;
        choosePlayerContainer.style.display = "none";
        loadBoard();
        title.style.display = "flex"
    })
}

//Display the Game Board
function loadBoard() {
    gameContainer.classList.add('loaded')

    gameState.board.forEach((row,index) => {
        row.forEach((_sq, i) => {

            // Create the Tic Tac Toe squares
            const square = document.createElement('div');
            const squareId = `${index}${i}`;
            square.classList.add('box');
            square.id = squareId
            gameBoard.append(square);

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

    gameBoard.style.display = "flex";
}

function checkAvailableSquare(){
    let emptyBox = []

    //Check if board has available squares
    gameState.board.forEach((row, i) => {
        emptyBox[i] = row.includes('')
    })

    return emptyBox.includes(true) ? true : false;
}

start.addEventListener('click', startGame);
playerX.addEventListener('click', setPlayerX);
playerO.addEventListener('click', setPlayerO);

setTitle("Let's Play Tic Tac Toe!");





