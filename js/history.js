import { gameState, movesDesc, gameHistory } from "./variables.js";
import { setTitle } from "./script.js";


export function showPreviousMove(){
    const history = gameState.history;
    let pointer = gameState.historyPointer === -1 ? gameState.historyPointer + 1 : gameState.historyPointer;
    
    if(pointer >= 0 && gameState.historyPointer != -1){
        console.log('prev', pointer)
        history.forEach((move, index) => {
            if(index === pointer){
                const marker = move[0] === "O" ? "circle" : "cross";
                const box = document.getElementById(move[1])
                console.log(move, index)
                console.log(marker, box)
                box.classList.remove(marker)
            }
        })

        gameState.historyPointer = pointer !== 0 ? pointer -1 : -1;
        console.log('pointer', gameState.historyPointer)

    } else {
        console.log('end of moves', gameState.historyPointer)
        setTitle("No previous move available")
    }
    
    
}

export function showNextMove(){
    const history = gameState.history;
    let pointer = gameState.historyPointer +1;

    if(pointer < history.length){
        console.log('next',pointer)
        history.forEach((move, index) => {
            if(index === pointer){
                const marker = move[0] === "O" ? "circle" : "cross";
                const box = document.getElementById(move[1])
                console.log(move, index)
                console.log(marker, box)
    
                box.classList.add(marker)
            }
        })
        gameState.historyPointer = pointer;
        console.log('pointer', gameState.historyPointer)
    } else {
        pointer = gameState.historyPointer
        console.log('end of moves', gameState.historyPointer)
        setTitle("No next move available")
    }
}

export function showGameHistory(){
    const firstPlayerMoves = gameState.firstPlayer === "X" ? gameState.playerXCombos : gameState.playerOCombos;
    const secondPlayerMoves = gameState.firstPlayer === "X" ? gameState.playerOCombos : gameState.playerXCombos;

    const firstPlayer = gameState.firstPlayer
    const secondPlayer = gameState.firstPlayer === "X" ? "O" : "X"

    console.log('first', firstPlayer, 'second', secondPlayer)

    firstPlayerMoves.forEach((move, index) => {

        const firstPlayerMove = movesDesc.find(obj => obj.pair === move)
        if(firstPlayerMove){
            const span = document.createElement('span')
            span.textContent = "Player 1: " + firstPlayerMove.desc;
            gameHistory.append(span)
            gameState.history.push([firstPlayer, firstPlayerMove.pair])
        }
        
        const secondPlayerMove = movesDesc.find(obj => obj.pair === secondPlayerMoves[index])
        if(secondPlayerMove){
            const span = document.createElement('span')
            span.textContent = "Player 2: " + secondPlayerMove.desc;
            gameHistory.append(span)
            gameState.history.push([secondPlayer, secondPlayerMove.pair])
        }

    })

    gameHistory.style.display = "flex"
    console.log(gameState.history)
}