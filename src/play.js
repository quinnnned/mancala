const {
    DEFAULT_BOARD, 
    update, 
    getValidMoves, 
    isGameOver
} = require('./engine.js')

const sample = a => 
    a[
        Math.floor(
            100 * Math.random()
        )
        % a.length
    ]

const randomPlay = (board, moves=[]) => {
    if (isGameOver(board)) {
        return [board, moves]
    }
    const move = sample(getValidMoves(board))
    return randomPlay(
        update(board, move), 
        [...moves, move]
    )
}

let n = 1000000
const hist = []
let reallyShortGames = ""
while (n) {
    n--

    const [board, moves] = randomPlay(DEFAULT_BOARD)

    console.error(n)
    if (moves.length < 10) {
        reallyShortGames+=`${moves.length}: ${moves}\n`
    }

    hist[moves.length] = (hist[moves.length] || 0) + 1
}

hist.forEach( (tally, moves) => {
    if (tally){
        console.log(moves + "," + tally)
    }
})

console.error(reallyShortGames)