
const T = true
const F = false

const DEFAULT_BOARD = [
    [ 0, 4, 4, 4, 4, 4, 4, F],
    [ T, 4, 4, 4, 4, 4, 4, 0]
]

const isMyTurn = board => board[1][0] === T

const isTheirTurn = board => board[0][7] === T

const reverse = a => a.slice().reverse()

const flipBoard = board => reverse(board).map(reverse)

const handlePerspective = updater => (board=DEFAULT_BOARD, move) => {
    if (isTheirTurn(board)) {
        return flipBoard(
            updater(
                flipBoard(board),
                move
            )
        )
    }
    return updater(board, move)
}

const toggleTurn = board => board.map( row => 
    row.map( x => {
        if (x === T) return F
        if (x === F) return T
        return x
    })
)

const boardToRing = board => [
    ...board[1].slice(-7),
    ...board[0].slice(1,7).reverse()
]

const updateBoardFromRing = (board, ring) => [
    [ board[0][0], ...ring.slice(7,13).reverse(), board[0][7] ],
    [ board[1][0], ...ring.slice(0,7) ]
]

const update = handlePerspective( (board=DEFAULT_BOARD, pitPosition) => {
    const ring = boardToRing(board)
    const lift = pitPosition - 1
    let stones = ring[lift]
    ring[lift] = 0
    let drop = lift + 1
    while (stones > 0) {
        stones--
        ring[drop]++
        drop = (drop + 1) % 13
    }
    
    // Change Turn By Default
    let finalize = toggleTurn

    // Free Turn
    if (drop === 7) {
        finalize = board => board
    }

    // Steal
    if (drop < 7 && ring[drop - 1] === 1) {
        ring[6] += 1 + ring[13 - drop]
        ring[drop - 1] = 0
        ring[13 - drop] = 0
    }

    const penultimateBoard = updateBoardFromRing(board, ring)

    // Game Over
    const add = (a,b) => a + b
    const mySum = ring.slice(0, 6).reduce(add)
    const theirSum = ring.slice(7, 13).reduce(add)
    if (mySum === 0 || theirSum === 0) {
        const myScore = mySum + penultimateBoard[1][7]
        const theirScore = theirSum + penultimateBoard[0][0]
        return [
            [ theirScore, 0, 0, 0, 0, 0, 0, F],
            [ F, 0, 0, 0, 0, 0, 0,  myScore]
        ]
    }

    return finalize(penultimateBoard)
})


const isGameOver = board => 
    !isTheirTurn(board) && !isMyTurn(board)

const getValidMoves = board => {
    if (isGameOver(board)) {
        return []
    }
    
    if (isTheirTurn(board)) {
        board = flipBoard(board)
    }

    return board[1].map( (x, i) => {
        if ( i < 1 ) return 0
        if ( i > 6 ) return 0
        if ( x < 1 ) return 0
        return i 
    }).filter(Boolean)
}

module.exports = {
    DEFAULT_BOARD,
    update,
    isGameOver,
    getValidMoves
}