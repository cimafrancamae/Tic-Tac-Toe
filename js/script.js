import { loadBoard } from './board.js';

const choosePlayerContainer = document.querySelector('.choose-player-container');
const confirmPlayer = document.querySelector('.confirm-player');
const playerX = document.getElementById('player-x');
const playerO = document.getElementById('player-o');

let player = "";

playerX.addEventListener('click', () => {
    player = "x"
    confirmPlayer.innerHTML = ""
    choosePlayer(player)
})

playerO.addEventListener('click', () => {
    player = "o"
    confirmPlayer.innerHTML = ""
    choosePlayer(player)
})

function choosePlayer(player) {
    const span = document.createElement('span');
    const button = document.createElement('button');
    let playerText = ""

    if(player === "x"){
        playerText = "Player X plays first?"
    } else if(player === "o"){
        playerText = "Player O plays first?"
    }

    span.textContent = playerText;
    button.textContent = "Yes"
    confirmPlayer.append(span)
    confirmPlayer.append(button)
    confirmPlayer.style.display = "flex"

    button.addEventListener('click', () => {
        choosePlayerContainer.style.display = "none";
        console.log(player)
        loadBoard(player);
    })
}





