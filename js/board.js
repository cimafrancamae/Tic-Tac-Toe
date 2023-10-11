// import { recordMove, displayWinner } from './winner.js'

// const mainContainer = document.getElementById('main-container');


// let board = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', ''],
// ];

// let moves = [];
// let gameOver = false;

// export function loadBoard(firstPlayer) {
//     let player = firstPlayer;

//     mainContainer.style.display = "flex";

//     board.forEach((row,index) => {
//         row.forEach((_sq, i) => {
//             // Create the Tic Tac Toe squares
//             const square = document.createElement('div');
//             const squareId = `box-${index}${i}`;
//             square.classList.add('box');
//             square.id = squareId
//             mainContainer.append(square);

//             //Listen if a box is clicked
//             square.addEventListener('click', () => {

//                 player === "x" ? square.classList.toggle('cross') : square.classList.toggle('circle');
//                 gameOver = recordMove(board, player, index, i)

//                 if(gameOver){
//                     displayWinner(player);

//                     const allBoxes = document.querySelectorAll('.box')
//                     //Replace all boxes with a deep clone of itself and removes the event listener 
//                     allBoxes.forEach(box => box.replaceWith(box.cloneNode(true)))
//                     return
//                 }

                
//                 square.classList.add('clicked');
//                 player = player === "x" ? "o" : "x";
//             })

            
//         })
//     })
// }