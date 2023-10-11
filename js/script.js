import { recordMove, checkWinner, displayWinner } from './game.js'

const choosePlayerContainer = document.querySelector('.choose-player-container');
const confirmPlayer = document.querySelector('.confirm-player');
const mainContainer = document.querySelector('.main-container');
const infoContainer = document.querySelector('.info-container');
const playerX = document.getElementById('player-x');
const playerO = document.getElementById('player-o');

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let player = "";
let gameOver = false;

playerX.addEventListener('click', () => {
    player = "X"
    confirmPlayer.innerHTML = ""
    choosePlayer()
})

playerO.addEventListener('click', () => {
    player = "O"
    confirmPlayer.innerHTML = ""
    choosePlayer()
})

//Select First Player
function choosePlayer() {
    const span = document.createElement('span');
    const button = document.createElement('button');
    let playerText = ""

    playerText = player === "X" ? "Player X plays first?" : "Player O plays first?";

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
    
    mainContainer.style.display = "flex";

    board.forEach((row,index) => {
        row.forEach((_sq, i) => {

            // Create the Tic Tac Toe squares
            const square = document.createElement('div');
            const squareId = `box-${index}${i}`;
            square.classList.add('box');
            square.id = squareId
            mainContainer.append(square);

            //Listen if a box is clicked
            square.addEventListener('click', () => {

                player === "X" ? square.classList.toggle('cross') : square.classList.toggle('circle');

                recordMove(board, player, index, i);
                gameOver = checkWinner(player)

                if(gameOver){
                    displayWinner(player);
                    return
                } else {
                    const play = checkAvailableSquare()

                    if(!play){
                        displayWinner("tie");
                    }
                }
                
                square.classList.add('clicked');

                player = player === "X" ? "O" : "X";

                infoContainer.innerHTML = "";

                
            })

            
        })
    })
}

function checkAvailableSquare(){
    let emptyBox = []

    //Check if board has available squares
    board.forEach((row, i) => {
        emptyBox[i] = row.includes('')
    })

    return emptyBox.includes(true) ? true : false;
}





