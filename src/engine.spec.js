check("White Basic Movement", {
    before: [
        [ 0, 4, 4, 4, 4, 4, 4, F],
        [ T, 4, 4, 4, 4, 4, 4, 0],
    ],
    moves: [1],
    after: [
        [ 0, 4, 4, 4, 4, 4, 4, T],
        [ F, 0, 5, 5, 5, 5, 4, 0],
    ]
})

check("Black Basic Movement", {
    before: [
        [ 0, 4, 4, 4, 4, 4, 4, T],
        [ F, 4, 4, 4, 4, 4, 4, 0],
    ],
    moves: [1],
    after: [
        [ 0, 4, 5, 5, 5, 5, 0, F],
        [ T, 4, 4, 4, 4, 4, 4, 0],
    ]
})

check("White Free Turn", {
    before: [
        [ 0, 4, 4, 4, 4, 4, 4, F],
        [ T, 4, 4, 4, 4, 4, 4, 0],
    ],
    moves: [3],
    after: [
        [ 0, 4, 4, 4, 4, 4, 4, F],
        [ T, 4, 4, 0, 5, 5, 5, 1],
    ]
})

check("Black Free Turn", {
    before: [
        [ 0, 4, 4, 4, 4, 4, 4, T],
        [ F, 4, 4, 4, 4, 4, 4, 0],
    ],
    moves: [3],
    after: [
        [ 1, 5, 5, 5, 0, 4, 4, T],
        [ F, 4, 4, 4, 4, 4, 4, 0],
    ]
})

check("Ridiculous Scenario", {
    before: [
        [ 0, 0, 0, 0, 0, 0,  0, F],
        [ T, 0, 0, 0, 0, 0, 48, 0],
    ],
    moves: [6],
    after: [
        [ 0, 4, 4, 4, 4, 4, 4, T],
        [ F, 4, 4, 3, 3, 3, 3, 4],
    ]
})

check("Robertson Opening", {
    before: [
        [ 0, 4, 4, 4, 4, 4, 4, F],
        [ T, 4, 4, 4, 4, 4, 4, 0],
    ],
    moves: [3,6],
    after:[
        [ 0, 4, 4, 5, 5, 5, 5, T],
        [ F, 4, 4, 0, 5, 5, 0, 2],
    ]
})

check("Robertson Opening, Consequences", {
    before: [
        [ 0, 4, 4, 4, 4, 4, 4, F],
        [ T, 4, 4, 4, 4, 4, 4, 0],
    ],
    moves: [ 3, 6, 2, 6, 2, 6, 1],
    after:[
        [ 2, 0, 5, 6, 6, 0, 0,  T],
        [ F, 0, 1, 3, 8, 7, 0, 10],
    ]
})

check("Basic Game Over", {
    before: [
        [ 23, 1, 0, 0, 0, 0, 0,  F],
        [  T, 0, 0, 0, 0, 0, 1, 23],
    ],
    moves: [6],
    after: [
        [ 24, 0, 0, 0, 0, 0, 0,  F],
        [  F, 0, 0, 0, 0, 0, 0, 24],
    ]
})

check("Steal Game Over", {
    before: [
        [ 23, 0, 0, 0, 0, 0, 1,  F],
        [  T, 0, 0, 0, 0, 1, 0, 23],
    ],
    moves: [5],
    after: [
        [ 23, 0, 0, 0, 0, 0, 0,  F],
        [  F, 0, 0, 0, 0, 0, 0, 25],
    ]
})

describe("getValidMoves", () => {
    expect(
        getValidMoves([
            [ 24, 0, 0, 0, 0, 0, 0,  F],
            [  F, 0, 0, 0, 0, 0, 0, 24],
        ])
    ).toEqual([])

    expect(
        getValidMoves([
            [ 0, 4, 4, 4, 4, 4, 4, F],
            [ T, 4, 4, 4, 4, 4, 4, 0],
        ])
    ).toEqual([1,2,3,4,5,6])

    expect(
        getValidMoves([
            [ 0, 4, 4, 4, 4, 4, 4,  F],
            [ T, 4, 0, 4, 0, 4, 0, 12],
        ])
    ).toEqual([1,3,5])

    expect(
        getValidMoves([
            [ 0, 4, 4, 4, 4, 4, 4,  F],
            [ T, 0, 4, 0, 4, 0, 4, 12],
        ])
    ).toEqual([2,4,6])

    expect(
        getValidMoves([
            [ 0, 4, 4, 4, 4, 4, 4, T],
            [ F, 4, 4, 4, 4, 4, 4, 0],
        ])
    ).toEqual([1,2,3,4,5,6])

    expect(
        getValidMoves([
            [ 12, 0, 4, 0, 4, 0, 4, T],
            [  F, 4, 4, 4, 4, 4, 4, 0],
        ])
    ).toEqual([1,3,5])

    expect(
        getValidMoves([
            [12, 4, 0, 4, 0, 4, 0, T],
            [ F, 4, 4, 4, 4, 4, 4, 0],
        ])
    ).toEqual([2,4,6])
})