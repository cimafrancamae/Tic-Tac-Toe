export let gameState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    player: "X",
    gameOver: false,
    playerXCombos: [],
    playerOCombos: [],
    winner: false
}

export const winningCombos = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["20", "11", "02"]
]