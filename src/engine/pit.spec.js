import * as Pit from './pit'

it('defaults to zero stones', () => 
    expect(
        Pit.getStoneCount(
            Pit.create()
        )
    ).toBe(
        0
    )
)

property(
    'preserves the stone count with which it was created', 
    any.naturalNumber, 
    n => 
        Pit.getStoneCount(
            Pit.create(
                n
            )
        )
        ===
        n
)

describe('Pit.addStone', () =>
    property(
        'produces a new pit with one more stone than before',
        any.naturalNumber,
        n => 
            Pit.getStoneCount(
                Pit.create(
                    n
                )
            ) + 1
            ===
            Pit.getStoneCount(
                Pit.addStone(
                    Pit.create(
                        n
                    )
                )
            )
    )
)


