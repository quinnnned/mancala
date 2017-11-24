import * as Pit from "./pit"

// Constants
const DEFAULT_PITS = [
    Pit.create(4),
    Pit.create(4),
    Pit.create(4),
    Pit.create(4),
    Pit.create(4),
    Pit.create(4)
]

// Core
export const create = (score = 0, turn = false, pits = DEFAULT_PITS) => {
    return {
        score,
        turn,
        pits
    }
}

export const getScore = (player) => player.score

export const getIsTurn = (player) => player.turn

export const getPit = (pitPosition) => (player) => player.pits[pitPosition-1]

// API
export const incrementScore = (player) =>
    create(
        getScore(player) + 1,
        getIsTurn(player),
        [
            getPit(1)(player),
            getPit(2)(player),
            getPit(3)(player),
            getPit(4)(player),
            getPit(5)(player),
            getPit(6)(player)
        ]
    )

export const toggleTurn = (player) => 
    create(
        getScore(player),
        !getIsTurn(player),
        [
            getPit(1)(player),
            getPit(2)(player),
            getPit(3)(player),
            getPit(4)(player),
            getPit(5)(player),
            getPit(6)(player)
        ]
    )