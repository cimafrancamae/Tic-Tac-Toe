import { gameState, movesDesc, gameHistory, closeHistory, leftPanel, rightPanel } from "./variables.js";
import { mediaQuery, setTitle } from "./script.js";


export function showPreviousMove(){
    const pointer = gameState.historyPointer === -1 ? gameState.historyPointer + 1 : gameState.historyPointer;
    
    if(pointer >= 0 && gameState.historyPointer != -1){
        const move = getMove(pointer);
        move.box.classList.remove(move.marker);
        gameState.historyPointer = pointer !== 0 ? pointer -1 : -1;
        setTitle("previous move")
    } else {
        setTitle("no previous move available")
    }
}

export function showNextMove(){
    const history = gameState.history;
    let pointer = gameState.historyPointer +1;

    if(pointer < history.length){
        const move = getMove(pointer);
        move.box.classList.add(move.marker)
        gameState.historyPointer = pointer;
        setTitle("next move")
    } else {
        pointer = gameState.historyPointer
        setTitle("no next move available")
    }
}

function getMove(pointer){
    const history = gameState.history;
    let playerMove = {marker: '', box: ''}
    history.forEach((move, index) => {
        if (index === pointer){
            playerMove.marker = move[0] === "O" ? "circle" : "cross";
            playerMove.box = document.getElementById(move[1])
        }
    })
    return playerMove
}

export function showGameHistory(){
    const firstPlayerMoves = gameState.firstPlayer === "X" ? gameState.playerXCombos : gameState.playerOCombos;
    const secondPlayerMoves = gameState.firstPlayer === "X" ? gameState.playerOCombos : gameState.playerXCombos;
    const firstPlayer = gameState.firstPlayer
    const secondPlayer = gameState.firstPlayer === "X" ? "O" : "X"

    firstPlayerMoves.forEach((move, index) => {
        const firstPlayerMove = movesDesc.find(obj => obj.pair === move)
        if(firstPlayerMove){
            addHistory(firstPlayer, firstPlayerMove)
        }
        
        const secondPlayerMove = movesDesc.find(obj => obj.pair === secondPlayerMoves[index])
        if(secondPlayerMove){
            addHistory(secondPlayer, secondPlayerMove)
        }
    })

    gameHistory.style.display = "flex"
    // mediaQuery("flex","none")
}

function addHistory(player, playerMove){
    const span = document.createElement('span')
    span.textContent = "Player " + player + ": " + playerMove.desc;
    gameHistory.append(span)
    gameState.history.push([player, playerMove.pair])
}