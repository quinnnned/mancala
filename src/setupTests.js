import {update, getValidMoves, isGameOver} from "./engine"

global.getValidMoves = getValidMoves

global.isGameOver = isGameOver

global.T = true
global.F = false

global.check = (title, {before, moves, after}) => 
    it(title, () => 
        expect(
            moves.reduce( (board, move) => 
                update(board, move),
                before
            )
        ).toEqual(after)
    )