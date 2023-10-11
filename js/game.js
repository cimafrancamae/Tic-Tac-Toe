const mainContainer = document.getElementById('main-container');
const infoContainer = document.querySelector('.info-container');
const boxes = document.querySelectorAll('.box')

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
let playerOCombos = []
let winner = false;
// let board = [];

export function recordMove(board, player, index1, index2){
    //Update Board State
    board[index1][index2] = player;

    //Concatenate indices
    const index = index1.toString() + index2.toString();

    //Store indices to player's array
    player === "X" ? playerXCombos.push(index) : playerOCombos.push(index);

    const span = document.createElement('span');
    span.textContent = "It's Player " + player + "'s Turn";
    infoContainer.append(span);
}

export function checkWinner(player){

    let playerMoves = player === "X" ? playerXCombos : playerOCombos;
    let checkWinningCombo = winningCombos

    playerMoves.forEach((move) => {

        //Check if player has winning combinations
        checkWinningCombo = checkWinningCombo.filter(array => array.includes(move))

        //Check if player has one winning combination left
        if(checkWinningCombo.length === 1){

            //Sort the winning combinations in each array
            checkWinningCombo = checkWinningCombo.slice().sort()
            playerMoves = playerMoves.slice().sort()

            //If all items in players array exist in the winning combination array, player wins
            winner = checkWinningCombo[0].every(item => playerMoves.includes(item));
        }
    })

    return winner
}

export function displayWinner(player){
    infoContainer.innerHTML = "";

    const span = document.createElement('span')

    if(player === "tie"){
        span.textContent = "It's a TIE!";
    } else {
        span.textContent = "Player " + player + " Wins!";
    }

    // span.textContent = player === "tie" ? "It's a TIE" : "Player " + player + " Wins!";
    
    console.log(span)

    const buttonDiv = document.createElement('div')
    
    const prevButton = document.createElement('button')
    prevButton.textContent = "<< Previous"
    prevButton.id = "prev-btn"

    const nextButton = document.createElement('button')
    nextButton.textContent = "Next >>"
    nextButton.id = "next-btn"

    const restart = document.createElement('button')
    restart.textContent = "Restart Game"

    console.log(prevButton, nextButton, restart, buttonDiv)
    console.log(infoContainer)
    buttonDiv.append(prevButton, nextButton)
    infoContainer.append(span, buttonDiv, restart)


    // restart.addEventListener('click', restartGame)

    //Replace all boxes with a deep clone of itself and removes the event listener 
    // const allBoxes = document.querySelectorAll('.box')
    // allBoxes.forEach(box => box.replaceWith(box.cloneNode(true))) 
    // boxes.forEach(box => box.classList.add('clicked'))
}

function restartGame(){
    console.log("you're here!", boxes)
    boxes.forEach((row) => {
        console.log(row)

    })
}

