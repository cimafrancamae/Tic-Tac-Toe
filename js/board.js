import { recordMove, displayWinner } from './winner.js'

const mainContainer = document.getElementById('main-container');


let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let moves = [];
let gameOver = false;

export function loadBoard(firstPlayer) {
    let player = firstPlayer;

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
                

                if(player === "x"){
                    gameOver = recordMove("x", index, i)
                    square.classList.toggle('cross');
                }else if(player === "o"){
                    gameOver = recordMove("o", index, i)
                    square.classList.toggle('circle');
                }

                if(gameOver){
                    displayWinner(player);

                    const allBoxes = document.querySelectorAll('.box')
                    allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
                    return
                }

                square.classList.add('clicked');
                player = player === "x" ? "o" : "x";
            })

            
        })
    })

    mainContainer.style.display = "flex";
}