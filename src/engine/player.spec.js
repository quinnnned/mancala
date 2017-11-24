import * as Player from './player'
import * as Pit from './pit'

it('should start with zero points', () => 
    expect(
        Player.getScore(
            Player.create()
        )
    ).toBe(
        0
    )
)

it('should start with four stones in each pit', () => {
    const player = Player.create()
    expect(Pit.getStoneCount(Player.getPit(1)(player))).toBe(4)
    expect(Pit.getStoneCount(Player.getPit(2)(player))).toBe(4)
    expect(Pit.getStoneCount(Player.getPit(3)(player))).toBe(4)
    expect(Pit.getStoneCount(Player.getPit(4)(player))).toBe(4)
    expect(Pit.getStoneCount(Player.getPit(5)(player))).toBe(4)
    expect(Pit.getStoneCount(Player.getPit(6)(player))).toBe(4)
})

property('should retain the score passed to it', 
    any.naturalNumber,
    n => 
        Player.getScore(
            Player.create(
                n
            )
        )
        ===
        n
)

property('should retain the turn flag passed to it', 
    any.naturalNumber,
    any.boolean,
    (score, turn) => 
        Player.getIsTurn(
            Player.create(
                score,
                turn
            )
        )
        ===
        turn
)

describe("Player.incrementScore", () => 
    property('increases the player score by 1', 
        any.naturalNumber,
        any.boolean,
        (score, turn) => 
            Player.getScore(
                Player.create(
                    score,
                    turn
                )
            ) + 1
            ===
            Player.getScore(
                Player.incrementScore(
                    Player.create(
                        score,
                        turn
                    )
                )
            )
    )
)

describe("Player.toggleTurn", () => 
    property("inverts the player turn flag", 
        any.naturalNumber,
        any.boolean,
        (score, turn) => 
            !Player.getIsTurn(
                Player.create(
                    score,
                    turn
                )
            )
            ===
            Player.getIsTurn(
                Player.toggleTurn(
                    Player.create(
                        score,
                        turn
                    )
                )
            )

    )
)