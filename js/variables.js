export let gameState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ],
    firstPlayer: "",
    player: "",
    gameOver: false,
    playerXCombos: [],
    playerOCombos: [],
    history: [],
    historyPointer: -1,
    prevHistory: 0
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

export const movesDesc = [
    {pair: "00", desc: "Top-Left"},
    {pair: "01", desc: "Top-Center"},
    {pair: "02", desc: "Top-Right"},
    {pair: "10", desc: "Middle-Left"},
    {pair: "11", desc: "Middle-Center"},
    {pair: "12", desc: "Middle-Right"},
    {pair: "20", desc: "Bottom-Left"},
    {pair: "21", desc: "Bottom-Center"},
    {pair: "22", desc: "Bottom-Right"},
]

export const choosePlayerContainer = document.querySelector('.choose-player-container');
export const confirmPlayer = document.querySelector('.confirm-player');
export const gameContainer = document.querySelector('.game-container');
export const gameBoard = document.querySelector('.game-board');
export const playerX = document.getElementById('player-x');
export const playerO = document.getElementById('player-o');
export const title = document.querySelector('.title');
export const start = document.querySelector('.start');
export const infoContainer = document.querySelector('.info-container');
export const rightPanel = document.querySelector('.right-panel');
export const leftPanel = document.querySelector('.left-panel');
export const gameHistory = document.querySelector('.game-history');