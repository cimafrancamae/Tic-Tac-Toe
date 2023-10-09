const mainContainer = document.getElementById('main-container');
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let moves = [];

export function loadBoard(firstPlayer) {
    let player = firstPlayer;

    board.forEach((row,index) => {
        row.forEach((sq, i) => {
            // Create the Tic Tac Toe squares
            const square = document.createElement('div');
            const squareId = `box-${index}${i}`;
            square.classList.add('box');
            square.id = squareId
            mainContainer.append(square);

            //Listen if a box is clicked
            square.addEventListener('click', () => {
                console.log('index: ',index, 'i: ', i, 'player: ', player)
                // console.log(board)
                if(player === "x"){
                    // board[index][i] = "x"
                    recordMove(index, i, "x")
                    square.classList.toggle('cross');
                    player = "o"
                }else if(player === "o"){
                    // board[index][i] = "o"
                    recordMove(index, i, "o")
                    square.classList.toggle('circle');
                    player = "x"
                }
            })
        })
    })

    mainContainer.style.display = "flex";
}

function recordMove(index, i, player){
    const newArray = ['', '', ''];
    newArray[i] = player
    board.push(newArray)
    console.log('newBoard: ', board)
}