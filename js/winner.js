const mainContainer = document.getElementById('main-container');
const winnerDisplay = document.querySelector('.winner');

const winningCombos = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"]
]

let playerXCombos = []
let playerYCombos = []
let win = false;

export function recordMove(player, index1, index2){
    const index = index1.toString() + index2.toString();

    player === "x" ? playerXCombos.push(index) : playerYCombos.push(index);
    checkWinner(player)

    if(win){
        return true
    } else {
        return false
    }
}

export function checkWinner(player){

    let playerMoves = player === "x" ? playerXCombos : playerYCombos;
    let checkWinningCombo = winningCombos

    playerMoves.forEach((move) => {
        
        checkWinningCombo = checkWinningCombo.filter(array => array.includes(move))

        if(checkWinningCombo.length === 1){
            checkWinningCombo = checkWinningCombo.slice().sort()
            playerMoves = playerMoves.slice().sort()

            const winner = checkWinningCombo[0].every(item => playerMoves.includes(item))

            if(winner){
                win = true
                return
            }
        }
    })
}

export function displayWinner(player){
    const span = document.createElement('span')
    span.textContent = "Game Over! Player " + player + " Wins!";

    const buttonDiv = document.createElement('div')

    const prevButton = document.createElement('button')
    prevButton.textContent = "<< Previous"
    prevButton.id = "prev-btn"

    const nextButton = document.createElement('button')
    nextButton.textContent = "Next >>"
    nextButton.id = "next-btn"

    const restart = document.createElement('button')
    restart.textContent = "Restart Game"

    buttonDiv.append(prevButton, nextButton)
    winnerDisplay.append(span, buttonDiv, restart)

    restart.addEventListener('click', restartGame)
}

function restartGame(){

}

